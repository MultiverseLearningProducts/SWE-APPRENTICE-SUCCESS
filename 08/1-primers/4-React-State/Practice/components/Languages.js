import React from "react";
import { useState } from 'react';

function Languages() {
    const [language, setLanguage] = useState("Ruby")
    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">I like: {language}</h5>
                <p className="card-text">Click the button to change your favorite language.</p>
                <button  
                    className="btn" 
                    id="javascript" 
                    onClick = {() => setLanguage("JavaScript")}
                >JavaScript</button>
                <button  
                    className="btn" 
                    id="python" 
                    onClick = {() => setLanguage("Python")}
                >Python</button>
                <button 
                    className="btn" 
                    id="java" 
                    onClick = {() => setLanguage("Java")}
                >Java</button>
                <button  
                    className="btn" 
                    id="c" 
                    onClick = {() => setLanguage("C++")}
                >C++</button>
            </div>
        </div>
    )
}

module.exports = Languages;