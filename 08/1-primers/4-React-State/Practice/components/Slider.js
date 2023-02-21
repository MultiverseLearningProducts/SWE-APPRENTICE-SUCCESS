import React from "react";
import { useState } from 'react';

function Slider() {
    const [slideVal, setSlider] = useState(50);
    return(
        <div className="card">
            <div className="card-body">
            <h5 className="card-title">Slider Value: {slideVal}</h5>
                <div class="slidecontainer">
                    <input 
                    type="range" 
                    min="1" 
                    max="100" 
                    class="slider" 
                    id="myRange"
                    // 
                    onChange = {(event) => setSlider(event.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}

module.exports = Slider;