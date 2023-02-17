import React from "react";
import Card from "./components/Card"
import bella from "./components/images/Bella.jpg"
function App() {
    return(
        <>
            <h1>Hello World</h1>
            <Card name = "buster" activity = "running" image = {bella}/>
        </>
        
    )
}

module.exports = App;