import React from "react";
import { useState } from 'react';

function Radio() {
    const [radioVal, setRadio] = useState("");
    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Radio Value: {radioVal}</h5>
                <div class="form-check">
                    <input 
                        class="form-check-input" 
                        type="radio" 
                        name="flexRadioDefault" 
                        id="flexRadioDefault1"
                        onChange = {() => setRadio(1)}
                        />
                    <label class="form-check-label" for="flexRadioDefault1">
                        1
                    </label>
                </div>
                <div class="form-check">
                    <input 
                        class="form-check-input"
                        type="radio" 
                        name="flexRadioDefault" 
                        id="flexRadioDefault2"
                        onChange = {() => setRadio(2)}
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                        2
                    </label>
                </div>
                <div class="form-check">
                    <input 
                        class="form-check-input"
                        type="radio" 
                        name="flexRadioDefault" 
                        id="flexRadioDefault3"
                        onChange = {() => setRadio(3)}
                    />
                    <label class="form-check-label" for="flexRadioDefault3">
                        3
                    </label>
                </div>
                <div class="form-check">
                    <input 
                        class="form-check-input"
                        type="radio" 
                        name="flexRadioDefault" 
                        id="flexRadioDefault4"
                        onChange = {() => setRadio(4)}
                    />
                    <label class="form-check-label" for="flexRadioDefault4">
                        4
                    </label>
                </div>
            </div>
        </div>
    )
}

module.exports = Radio;