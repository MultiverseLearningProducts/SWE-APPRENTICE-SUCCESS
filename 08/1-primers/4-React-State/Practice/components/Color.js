import React from "react";
import { useState } from 'react';

function Color() {
    const [color, setColor] = useState(null)
    return(
        <div className="card">
            <div className="card-body">
                <div className="card-image" style={{backgroundColor:color}}></div>
                <h5>Color</h5>
                <div className="card-text">
                    <div className="input btn-block">
                        <input type="color" 
                            className="colorButton" 
                            onChange={(event) => setColor(event.target.value)}
                        />
                    </div>
                    <div className="output" >
                        <label htmlFor="colorOutput">Current Color: </label>
                        <span name="colorOutput">{color}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

module.exports = Color;