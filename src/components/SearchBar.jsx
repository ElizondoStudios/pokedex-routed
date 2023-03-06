import { useRef } from "react";
import { useNavigate } from "react-router";

function SearchBar() {

    const navigate= useNavigate()
    const searchInput= useRef()

    function searchPokemon(event){
        event.preventDefault()
        navigate(searchInput.current.value)
    }

    return ( 
        <form className="container">
            <div className="input-group">
                <div className="form-floating">
                <input type="text" name="pokemon" id="pokemon"
                 className="form-control form-control-sm"
                 ref={searchInput} placeholder="Pokemon"
                />
                <label htmlFor="pokemon" className="text-dark">Pokémon name or number</label>
                </div>
                <button className="btn btn-dark border" onClick={searchPokemon}>Search</button>
            </div>
        </form>
     )
}

export default SearchBar;