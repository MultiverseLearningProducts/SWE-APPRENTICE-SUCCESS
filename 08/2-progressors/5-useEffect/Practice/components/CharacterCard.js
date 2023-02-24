import React from "react";

function CharacterCard({data}) {
    return(
        <div className="card">
            {data.image ? <img src={data.image} alt={data.nam} /> : ""}
            <h1>{data.name}</h1>
            <p className="house">{data.house}</p>
            <p>{data.actor}</p>
            {data.patronus ? <p>Patronus: {data.patronus}</p> : ""}
            {data.ancestry === "muggle" ? <p className = "emoji">👩</p> : <p className = "emoji">🪄</p>}
        </div>
    )
}

module.exports = CharacterCard;