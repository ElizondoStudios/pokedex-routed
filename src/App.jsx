import { Route, Routes, useNavigate } from "react-router";
import { useRef } from "react";
import Home from "./pages/Home"
import SearchBar from "./components/SearchBar";
import Pokemon from "./pages/Pokemon";
import ChangeButtons from "./components/ChangeButtons";
import NotFound from "./pages/NotFound";


function App() {

  const currentPokemon= useRef(0)

  const navigate= useNavigate()

  function changeCurrentPokemon(num){
    currentPokemon.current= num
  }

  function nextPokemon(){
    currentPokemon.current++
    navigate(""+currentPokemon.current)
  }

  
  function prevPokemon(){
    currentPokemon.current--
    navigate(""+currentPokemon.current)
  }

  return ( 
    <div className="App container mt-4">
      <SearchBar/>
      <ChangeButtons currentPokemon={currentPokemon.current} nextPokemon={nextPokemon} prevPokemon={prevPokemon}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<Pokemon changeCurrentPokemon={changeCurrentPokemon}/>}/>
        <Route path="/not-found" element={<NotFound currentPokemon={currentPokemon.current}/>}/>
        <Route path="*" element={<NotFound currentPokemon={currentPokemon.current}/>}/>
      </Routes>
    </div>
   )
}

export default App;
