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
        // console.log("this is the user data once connected", res.data)
        
        setUser(res.data)
    }

    // EFFECT
    useEffect(() => {

        getUser();

    }, [])

    // MEMO
    const value = useMemo(() => ({ user, setUser }), [user]);

    
    return (
    <>
        <div className="welcome-mobile">
            <div>
           <strong> Welcome to Dissolvd! </strong>
            </div>
            <div>
                <i>
                Mobile version isn't ready yet but it will be soon.
                Please check out the desktop version
                </i>
            </div>
            <div>
                Dissolvdへようこそ U+ff01
                モバイル版はまだ準備ができていませんので、 デスクトップ版をご利用してください。
            </div>
            <div>
                La version mobile de notre application mobile n'est disponible pour le moment.
                Veuillez consulter la version pour ordinateur.
            </div>
        </div>
        <div className="main-desktop">
        
            <Router>
                <UserContext.Provider value={value}>
                    <Body />
                </UserContext.Provider>
            </Router>
        </div>
    </>
    );
}

export default App;
