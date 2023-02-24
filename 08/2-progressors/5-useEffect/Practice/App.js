import React from "react";
import { useEffect, useState } from "react";

// Import components here
import CharacterCard from "./components/CharacterCard"
import "./style.css"
function App() {
    const [characters, setCharacters] = useState([]);

    async function handleRequest() {
        const res = await fetch("https://hp-api.onrender.com/api/characters");
        const data = await res.json();
        setCharacters(data);
    }

    useEffect(() => {
        handleRequest();
    }, [])
    
    return(
        <div className = "page">
            <h1 id = "title">Harry Potter Wiki</h1>
            <div className="app">
                {/* Render all components here */}
                <div className = "characters">
                    {characters.map(char =>
                        <CharacterCard data = {char}/>
                    )}
                </div>
            </div>
        </div>
        
    )
}

module.exports = App;