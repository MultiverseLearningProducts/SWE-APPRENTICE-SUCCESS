import React from "react";

function Login({ isRegistered }) {
    return(
        <form className="form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <div className = "text-center">
                <button>Login</button>
            </div> 
        </form>
    )
}

module.exports = Login;