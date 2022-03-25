// import React, { useState, useEffect } from "react";
import "../../css/app.scss";
import Body from "./Components/Body";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <Body />
            </Router>
        </div>
    );
}

export default App;
