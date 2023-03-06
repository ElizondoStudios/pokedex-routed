import { Route, Routes } from "react-router";
import Home from "./pages/Home"
import SearchBar from "./components/SearchBar";
import Pokemon from "./pages/Pokemon";

function App() {
  return ( 
    <div className="App container mt-4">
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<Pokemon/>}/>
      </Routes>
    </div>
   )
}

export default App;
