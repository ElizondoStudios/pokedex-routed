import { useEffect, useState } from "react";
import { useParams } from "react-router";

import PokemonCard from "../components/PokemonCard";

function Pokemon(props) {
    const {id}= useParams()
    const [Pokemon, setPokemon] = useState({
        id: "1",
        height: "7",
        weight: "69",
        species:{name: "bulbasaur"},
        sprites:{front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},
        types:[
            {type:{
                name:"grass"
            }},
            {type:{
                name: "poison"
            }}
        ]
    })
    const [Sprite, setSprite] = useState(Pokemon.sprites.front_default)

    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(data => {
        setPokemon(data)
        setSprite(data.sprites.front_default)
        props.changeCurrentPokemon(data.id)
      })
    },[id])


    function changeSprite(){
        setSprite(
            prevSprites => prevSprites.includes("shiny")? 
            Pokemon.sprites.front_default:
            Pokemon.sprites.front_shiny
        )
    }

    return ( 
        <div className="container d-flex flex-column align-items-center mt-4">
            <PokemonCard Sprite={Sprite} Pokemon={Pokemon} changeSprite={changeSprite}/>
        </div>
     );
}

export default Pokemon;