import React from "react";
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0)
    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Current Count: {count}</h5>
                <p className="card-text">Increase or decrease the count.</p>
                <div className = "btn-container">
                    <button  
                        className="btn" 
                        id="increase" 
                        onClick = {() => setCount(count + 1)}
                    >+</button>
                    <button  
                        className="btn" 
                        id="decrease" 
                        onClick = {() => setCount(count - 1)}
                    >-</button>
                </div>
            </div>
        </div>
    )
}

module.exports = Counter;