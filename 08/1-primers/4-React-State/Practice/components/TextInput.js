import React from "react";
import { useState } from 'react';

function TextInput() {
    const [text, setText] = useState("")
    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Current Text: {text}</h5>
                <input 
                    type="text" 
                    class="form-control" 
                    id="inputText" 
                    placeholder="Enter some text"
                    // Create onChange function here
                    onChange = {(event) => setText(event.target.value)}
                />
            </div>
        </div>
    )
}

module.exports = TextInput;