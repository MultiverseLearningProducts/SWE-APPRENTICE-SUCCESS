import React from "react";


function Counter() {
    



    return(
        <div className="card">
            <div className="card-body">
                {/* Output count state here */}
                <h5 className="card-title">Current Count: </h5>
                <p className="card-text">Increase or decrease the count.</p>
                <div className = "btn-container">
                    <button  
                        className="btn" 
                        id="increase"
                        // Increase count state by 1


                    >+</button>
                    <button  
                        className="btn" 
                        id="decrease" 
                        // Decrease count state by 1

                        
                    >-</button>
                </div>
            </div>
        </div>
    )
}

module.exports = Counter;