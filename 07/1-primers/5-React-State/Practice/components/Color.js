import React from "react";



function Color() {

    

    return(
        <div className="card">
            <div className="card-body">
                <div className="card-image"></div>
                <h5>Color</h5>
                <div className="card-text">
                    <div className="input btn-block">
                        <input type="color" 
                            className="colorButton" 
                            // Call onChange function here

                        />
                    </div>
                    <div className="output" >
                        <label htmlFor="colorOutput">Current Color: </label>
                        {/* Output state here */}
                        <span name="colorOutput"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

module.exports = Color;