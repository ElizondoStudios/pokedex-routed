import {useRef, useState } from "react";
import { useNavigate } from "react-router";

function SearchBar() {

    const [Validated, setValidated] = useState("")
    const navigate= useNavigate()
    const searchInput= useRef()
    const formRef= useRef()

    function searchPokemon(event){
        event.preventDefault()
        const search= searchInput.current.value.trim().toLowerCase()
        if(formRef.current.checkValidity()){
            setValidated("")
            navigate(search)
        }
        else 
            setValidated("was-validated")
    }


    return ( 
        <form className={`container ${Validated}`} ref={formRef}>
            <div className="input-group">
                <div className="form-floating">
                <input type="text" name="pokemon" id="pokemon"
                 className="form-control form-control-sm"
                 ref={searchInput} placeholder="Pokemon"
                 required
                 pattern="[a-zA-Z0-9]+" title="pokemon name"
                />
                <label htmlFor="pokemon" className="text-dark">Pokémon name or number</label>
                </div>
                <button className="btn btn-dark border" onClick={searchPokemon}>Search</button>
            </div>
        </form>
     )
}

export default SearchBar;