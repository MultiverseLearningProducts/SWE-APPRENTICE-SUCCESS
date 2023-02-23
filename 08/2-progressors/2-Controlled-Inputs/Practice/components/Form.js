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
                />
                <label htmlFor="lname">Last Name</label>
                <input 
                    type="text" 
                    id="lname" 
                    name="lastname" 
                    placeholder="Your last name.."
                />
                <label htmlFor="country">Country</label>
                <select 
                    id="country" 
                    name="country" 
                >
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Scotland">Scotland</option>
                    <option value="Wales">Wales</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Northern Ireland">Northern Ireland</option>
                </select>

                <textarea 
                    name="comment" 
                    form="usrform" 
                    id = "text" 
                    placeholder="Tell us your thoughts"
                >    
                </textarea>
            </form>

            
            <div className = "output">
                {/* Output the content here! */}
                
                
            </div>
        </>
    )
}

module.exports = Form;