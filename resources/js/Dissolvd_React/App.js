import React, { useState, useEffect } from "react";
// import '../../css/app.scss';
import Body from "./Components/Body";
// import app from "../css/app.scss"

import { BrowserRouter as Router } from "react-router-dom";
// import { Fragment } from 'react/cjs/react.production.min';

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
