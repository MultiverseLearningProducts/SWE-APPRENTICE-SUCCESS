import React from "react"
import photo from "./picPlaceholder.jpg"

function YearbookCard() {
    return(
        <div class="card">
            <img src={photo} alt="studentPhoto" />
            <div class="container">
                <h4><b>PLACE_NAME_HERE</b></h4>
                <p class = "quote">"PLACE_QUOTE_HERE"</p>
            </div>
            <div className = "footer">
                <button class="btn third">
                    <span role = "img">❤️</span>
                </button>
                <button class="btn third">
                    <span role = "img">⭐️</span>
                </button>
                <button class="btn third">
                    <span role = "img">💬</span>
                </button>
            </div>
        </div>
    )
}

module.exports = YearbookCard;