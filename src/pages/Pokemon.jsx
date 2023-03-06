import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Pokemon() {
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

    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(data => {
        setPokemon(data)
      })
    },[id])

    return ( 
        <div className="container d-flex flex-column align-items-center mt-4">
            <div className="card text-bg-dark border border-light border-2" style={{width: "50vw", maxWidth: "400px"}}>
                <img src={Pokemon.sprites.front_default}
                 alt="Pokemon sprite"
                 className="card-img-top"
                />
                <div className="card-body">
                    <h3 className="card-title">{Pokemon.species.name}</h3>
                    <p className="card-text">
                        Number: {Pokemon.id}
                        <br/>
                        {Pokemon.types.length>1? `Types: ${Pokemon.types[0].type.name}/${Pokemon.types[1].type.name}`:
                            `Type: ${Pokemon.types[0].type.name}`
                        }
                        <br/>
                        Height: {Pokemon.height/10}m Weight: {Pokemon.weight/10}kg
                    </p>
                </div>
            </div>
        </div>
     );
}

export default Pokemon;