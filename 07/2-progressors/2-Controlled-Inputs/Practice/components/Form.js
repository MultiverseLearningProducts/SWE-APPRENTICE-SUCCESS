import React from "react";
// Import useState
import { useState } from "react";

function Form(){
    // Initialize State


    
    

    return(
        <>
            {/* Add onChange event listeners */}
            <form id = "usrform">
                <label htmlFor="fname">First Name</label>
                <input 
                    type="text" 
                    id="fname" 
                    name="firstname" placeholder="Your name.." 
                    onChange = {(e) => setFirstName(e.target.value)}
                />
                <label htmlFor="lname">Last Name</label>
                <input 
                    type="text" 
                    id="lname" 
                    name="lastname" 
                    placeholder="Your last name.."
                    onChange = {(e) => setLastName(e.target.value)}
                />
                <label htmlFor="country">Country</label>
                <select 
                    id="country" 
                    name="country" 
                    data-testid="select"

                    onChange = {(e) => setCountry(e.target.value)}
                >
                    <option data-testid="select-option" value="Australia">Australia</option>
                    <option data-testid="select-option" value="Canada">Canada</option>
                    <option data-testid="select-option" value="USA">USA</option>
                    <option data-testid="select-option" value="UK">UK</option>
                    <option data-testid="select-option" value="Scotland">Scotland</option>
                    <option data-testid="select-option" value="Wales">Wales</option>
                    <option data-testid="select-option" value="Ireland">Ireland</option>
                    <option data-testid="select-option" value="Northern Ireland">Northern Ireland</option>
                </select>

                <textarea 
                    name="comment" 
                    form="usrform" 
                    id = "text" 
                    placeholder="Tell us your thoughts"
                    onChange={e => setInput(e.target.value)}
                >    
                </textarea>
            </form>

            {/* Output the content here! */}
            <div className = "output">
                {firstName ? <p>First Name: {firstName}</p> : ""}
                {lastName ? <p>Last Name: {lastName}</p> : ""}
                {country ? <p>Country: {country}</p> : ""}
                {input ? <p>Feedback: {input}</p> : ""}
            </div>
        </>
    )
}

module.exports = Form;