import React from "react";



function Languages() {
    




    return(
        <div className="card">
            <div className="card-body">
                {/* Render language state here */}
                <h5 className="card-title">I like: </h5>
                <p className="card-text">Click the button to change your favorite language.</p>
                <button  
                    className="btn" 
                    id="javascript" 
                    // Change state to JavaScript when clicked



                >JavaScript</button>
                <button  
                    className="btn" 
                    id="python" 
                    // Change state to Python when clicked



                >Python</button>
                <button 
                    className="btn" 
                    id="java" 
                    // Change state to Java when clicked



                >Java</button>
                <button  
                    className="btn" 
                    id="c" 
                    // Change state to C++ when clicked



                >C++</button>
            </div>
        </div>
    )
}

module.exports = Languages;