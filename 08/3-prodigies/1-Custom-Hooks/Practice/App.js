import React from "react";
import "./style.css"
import PokemonCard from "./components/PokemonCard"
import Fox from "./components/Fox"
import Anime from "./components/Anime"
import DadJoke from "./components/DadJoke"

function App() { 
    return(
        <div className = "page">
            <h1 id = "title">THAT'S SO FETCH</h1>
            <div className="app">
                <Anime/>
                <Fox/>
                <DadJoke/>
                <PokemonCard/>
            </div>
        </div>
        
    )
}

module.exports = App;