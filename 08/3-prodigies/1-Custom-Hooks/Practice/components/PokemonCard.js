import React from "react";
import useFetch from "./useFetch";

function PokemonCard() {
    
    



    return(
        <div className="card">
            <div id="container">
                <h4><b>POKEMON_NAME</b></h4>
                {/* Render shiny_front sprite image if present */}


                <h4>Height: POKEMON_HEIGHT</h4>
                <h4>Weight: POKEMON_WEIGHT</h4>
            </div>
        </div>
    )
}

module.exports = PokemonCard;