import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

import PokemonCard from "../components/PokemonCard";
import Abilities from "../components/Abilities";
import Moves from "../components/Moves";
import Stats from "../components/Stats";

function Pokemon(props) {
    const {id}= useParams()
    const navigator= useNavigate()
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
        ],
        abilities:[
            {
                ability: {
                    name: "overgrow",
                    url:"https://pokeapi.co/api/v2/ability/65/"
                }
            },
            {
                ability: {
                    name: "chlorophyll",
                    url:"https://pokeapi.co/api/v2/ability/34/"
                }
            }
        ],
        moves:[

        ],
        stats:[

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
      .catch(error => {navigator("/")})
    },[id])


    function changeSprite(){
        setSprite(
            prevSprites => prevSprites.includes("shiny")? 
            Pokemon.sprites.front_default:
            Pokemon.sprites.front_shiny
        )
    }

    return ( 
        <div className="container d-flex flex-column align-items-center mt-4 bg-dar">
            <PokemonCard Sprite={Sprite} Pokemon={Pokemon} changeSprite={changeSprite}/>
            <Stats stats={Pokemon.stats}/>
            <Abilities abilities={Pokemon.abilities}/>
            <Moves moves={Pokemon.moves}/>
        </div>
     );
}

export default Pokemon;