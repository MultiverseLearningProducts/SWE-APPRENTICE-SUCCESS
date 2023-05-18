import React from "react";

function CharacterCard() {
    return(
        <div className="card">
            <img src="..." alt="..."/>
            <h1>CHARACTER_NAME_HERE</h1>
            <p className="house">HOGWARTS_HOUSE_HERE</p>
            <p className = "actor">ACTOR_HERE</p>
            {/* Conditionally render patronus and muggle/wizard emojis here */}
            
            
        </div>
    )
}

module.exports = CharacterCard;