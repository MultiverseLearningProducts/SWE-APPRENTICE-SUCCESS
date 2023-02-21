import React from "react";
import "./style.css";
import Languages from "./components/Languages"
import Counter from "./components/Counter"
import TextInput from "./components/TextInput"
import Slider from "./components/Slider"
import Radio from "./components/Radio"
import Color from "./components/Color"

function App() {
    return(
        <div className = "page">
            <h1 id = "title">STATE BUTTONS</h1>
            <div className="app">
                <Languages/>
                <Counter/>
                <Radio/>
                <TextInput/>
                <Slider/>
                <Color/>
            </div>
        </div>
        
    )
}

module.exports = App;