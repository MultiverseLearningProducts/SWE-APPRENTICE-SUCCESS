import React from "react";
// import useState

// import Character component


function Form() {
    // Create state variables here



    
    // Create handleSubmit function here
    



    return (
    <div className="create">
        <form aria-label="form">
            <label>Character Name:</label>
            <input 
                type="text" 
                required 
            />
            <label>What is your backstory?</label>
            <textarea
                required
            ></textarea>
            <label>Superpower:</label>
            <select data-testid="select-power">
                <option data-testid = "power-option" value="🔥">🔥</option>
                <option data-testid = "power-option" value="💨">💨</option>
                <option data-testid = "power-option" value="⚡️">⚡️</option>
                <option data-testid = "power-option" value="️️🌪️">🌪️</option>
            </select>
            <label>Icon:</label>
            <select data-testid="select-icon">
                <option data-testid = "select-option" value="😀">😀</option>
                <option data-testid = "select-option" value="🥹">🥹</option>
                <option data-testid = "select-option" value="😎">😎</option>
                <option data-testid = "select-option" value="🫡">🫡</option>
                <option data-testid = "select-option" value="🧐">🧐</option>
            </select>
            <button>Create Character</button>
        </form>
        
        {/* Import Character component here */}



    </div>
  );
}
 
export default Form;