// import React, { useState, useEffect } from "react";
import "../../css/app.scss";
import Body from "./Components/Body";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContext } from "../context/context";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

function App() {

    const [user, setUser] = useState(null)

    // const [hasWatched, setHasWatched] = useState(null)

    const getUser = async () => {

        const res = await axios.get('/api/user');
        console.log("this is the user data once connected", res.data)
        
        setUser(res.data)
    }

    useEffect(() => {

        getUser();

    }, [])

    const value = useMemo(() => ({ user, setUser }), [user]);

    
    return (
        <div>
            <Router>
                <UserContext.Provider value={value}>
                    <Body />
                </UserContext.Provider>
            </Router>
        </div>
    );
}

export default App;
