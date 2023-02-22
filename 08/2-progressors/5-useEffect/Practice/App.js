import React from "react";
import { useEffect, useState } from "react";

// Import components here


function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount(count => count + 1);
        }, 1000)
    }, [])

    return(
        <div className = "page">
            <h1 id = "title">The useEffect Hook 🪝</h1>
            <div className="app">
                {/* Render all components here */}
                <h3>{count}</h3>




            </div>
        </div>
        
    )
}

module.exports = App;