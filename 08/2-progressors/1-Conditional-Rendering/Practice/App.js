import React from "react";
import { useState } from "react";
import "./style.css"
// Import components here
import Login from "./components/Login"
import Item from "./components/Item"

function App() {


    return(
        <div className = "page">  
            <div className="app">
                <h1 id = "title">Shopping List 📝</h1>
                {/* Render Login component here */}
                
                
                
                <div className = "container">
                    <ul className="list">
                        <Item name = "Ice Cream" refrigerate ={true}/>
                        <Item name = "Cheese" refrigerate ={true}/>
                        <Item name = "Milk" refrigerate ={true}/>
                        <Item name = "Butter" refrigerate ={false}/>
                        <Item name = "Bread" refrigerate ={true}/>
                        <Item name = "Noodles" refrigerate ={false}/>
                        <Item name = "Bananas" refrigerate ={false}/>
                        <Item name = "Eggs" refrigerate ={true}/>
                        <Item name = "Canned Soup" refrigerate ={false}/>
                        <Item name = "Rice" refrigerate ={false}/>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

module.exports = App;