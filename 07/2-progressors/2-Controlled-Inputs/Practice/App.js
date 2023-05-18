import React from "react";
import "./style.css"
import Form from "./components/Form";
function App() {
    return(
        <div className = "page">
            <h1 id = "title">Tell Us About Yourself</h1>
            <div className="app">
                <Form />
            </div>
        </div>
    )
}

module.exports = App;