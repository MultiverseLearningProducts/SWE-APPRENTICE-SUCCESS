import React from "react";
import "../style.css"

function Character(){
    return(
        <div className="card">
            <div id="cardContainer">
                <h4>NAME_STATE_GOES_HERE</h4>
                <p>BACKSTORY_STATE_GOES_HERE</p>
                <p>Superpower: SUPERPOWER_STATE_GOES_HERE</p>
                <p>Icon: ICON_STATE_GOES_HERE</p>
            </div>
        </div>
    )         
}
module.exports = Character