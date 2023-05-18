import React from "react";


function Radio() {
    



    return(
        <div className="card">
            <div className="card-body">
                {/* Output radioVal state here */}
                <h5 className="card-title">Radio Value: </h5>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="flexRadioDefault" 
                        id="flexRadioDefault1"
                        // Set radioVal state to 1
                        


                        />
                    <label className="form-check-label" for="flexRadioDefault1">
                        1
                    </label>
                </div>
                <div className="form-check">
                    <input 
                        className="form-check-input"
                        type="radio" 
                        name="flexRadioDefault" 
                        id="flexRadioDefault2"
                        // Set radioVal state to 2



                    />
                    <label className="form-check-label" for="flexRadioDefault2">
                        2
                    </label>
                </div>
                <div className="form-check">
                    <input 
                        className="form-check-input"
                        type="radio" 
                        name="flexRadioDefault" 
                        id="flexRadioDefault3"
                        // Set radioVal state to 3



                    />
                    <label className="form-check-label" for="flexRadioDefault3">
                        3
                    </label>
                </div>
                <div className="form-check">
                    <input 
                        className="form-check-input"
                        type="radio" 
                        name="flexRadioDefault" 
                        id="flexRadioDefault4"
                        // Set radioVal state to 4


                        
                    />
                    <label className="form-check-label" for="flexRadioDefault4">
                        4
                    </label>
                </div>
            </div>
        </div>
    )
}

module.exports = Radio;