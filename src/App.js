// src/App.js
import React from "react";
import "./App.css";

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        h1 > BloomWatch Dashboard < /h1> <
        p > Monitoring Water Scarcity and its Impact on Agriculture < /p> <
        /header>

        { /* Filters area (placeholder) */ } <
        div className = "filters" >
        <
        p > Filters will appear here(placeholder). < /p> <
        /div>

        { /* Map / main content placeholder */ } <
        main className = "main-content" >
        <
        p >
        Map / charts will be shown here after you integrate < code > MapComponent < /code> and data. <
        /p> <
        /main> <
        /div>
    );
}

export default App;