import React from "react";


function TextInput() {
    


    return(
        <div className="card">
            <div className="card-body">
                {/* Output text state here */}
                <h5 className="card-title">Current Text: </h5>
                <input 
                    type="text" 
                    className="form-control" 
                    id="inputText" 
                    placeholder="Enter some text"
                    // Create onChange function here that updates text to the current value of this input element.
                    

                    
                />
            </div>
        </div>
    )
}

module.exports = TextInput;