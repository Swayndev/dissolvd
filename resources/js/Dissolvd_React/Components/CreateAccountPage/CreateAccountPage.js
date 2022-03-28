import React, { useContext, useRef, useState } from "react";
import "./CreateAccountPage.css";

// IMAGES //
import watch from "../../img/watch.svg";
import post from "../../img/post.svg";
import stars from "../../img/stars.svg";
import discussone from "../../img/discussone.svg";
import discusstwo from "../../img/discusstwo.svg";
import discussthree from "../../img/discussthree.svg";
import joinus from "../../img/joinus.svg";

// IMPORT COMPONENTS //
import SearchResult from "../SearchResult/SearchResult";
import axios from "axios";
import { UserContext } from "../../../context/context";
import { useNavigate } from "react-router-dom";

export const CreateAccountPage = ({ 
    displayResults, 
    movieResults, 
    setMovieId, 
    setQuery}) => {
   
    // HOOKS ==========================
    const [registerData, setRegisterData] = useState({
        email: "",
        username: "",
        password: "",
        password_confirmation: ""

    });
    
    const navigate = useNavigate();

    const { user, setUser } = useContext(UserContext);
    // FUNCTIONS AND LOGIC ===============

const handleSubmit = async(e) => {
    e.preventDefault();

    try {
    const response = await axios.post('/register', registerData);
        
        setUser(response.data)
        console.log('this is reponse', response.data)
        
        navigate('/')
        
    } catch(error) {
        // console.log(error); // information about the error
        console.log('this is error.response.data',error.response.data); // the response object from the failed request
        alert(error.response.data.message)
    }

    // TO BE CONTINUED
}


// This code make sure that the email value of signInData is not defaultly set to "" when the user type in the password
const handleChange = (e) => {
    setRegisterData(
        {...registerData,
        [e.target.name]: e.target.value}
    );
}

console.log("this is register data", registerData)





const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView();

    return (
        <>
            <SearchResult
                displayResults={displayResults}
                movieResults={movieResults}
                setMovieId={setMovieId}
                setQuery={setQuery}
            />

            <div className="create-wrap">
                <div className="create-header">
                    <h1>How does it work?</h1>
                    <button onClick={executeScroll}>Already know how?</button>
                </div>
                <div className="create-watch">
                    <div className="create-watch-heading">
                        <p>step one</p>
                        <h3>Watch</h3>
                    </div>
                    <img className="create-watch-img" src={watch} alt=""></img>
                    <p className="create-watch-text">
                        Before you can see what everyone else thought of a film
                        (including it's ratings and reviews), first you must
                        watch that film, because you should actually have to see
                        something before having an opinion on it right?
                    </p>
                </div>
                <div className="create-post">
                    <div className="create-post-body">
                        <img
                            className="create-post-img"
                            src={post}
                            alt=""
                        ></img>
                        <div className="create-post-text">
                            <p>step two</p>
                            <h3>Post</h3>
                            <p>
                                Now that you've seen the film, you should post
                                about it. You can leave a review, a rating or
                                simply declare that you have seen it.
                            </p>
                            <img src={stars}></img>
                            <p>
                                Once this is done, you're now able to see other
                                users opinions and thoughts and can participate
                                in the discussion.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="create-discuss">
                    <div className="create-discuss-heading">
                        <p>step three</p>
                        <h3>Discuss</h3>
                    </div>
                    <div className="create-discuss-body">
                        <div className="create-discuss-card">
                            <img src={discussone}></img>
                            <p>Join the discussion with other film lovers.</p>
                        </div>
                        <div className="create-discuss-card">
                            <img src={discusstwo}></img>
                            <p>
                                Share your thoughts with them, debate and
                                discover new opinions.
                            </p>
                        </div>
                        <div className="create-discuss-card">
                            <img src={discussthree}></img>
                            <p>
                                And find new friends that love films just like
                                you do.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="create-form-wrap">
                    <img src={joinus}></img>

                    <form
                        onSubmit={handleSubmit}
                        className="create-form"
                        ref={myRef}
                        // action=""
                        // method="post"
                    >
                        <label htmlFor="email"></label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={registerData.email}
                            onChange={handleChange}
                        />

                        <label htmlFor="username"></label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                            value={registerData.username}
                            onChange={handleChange}
                        />

                        <label htmlFor="password"></label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={registerData.password}
                            onChange={handleChange}
                        />
                        <label htmlFor="password_confirmation"></label>
                        <input
                            type="password"
                            name="password_confirmation"
                            id="password_confirmation"
                            placeholder="Confirm password"
                            value={registerData.password_confirmation}
                            onChange={handleChange}
                        />

                        <button
                            className="create-form-btn"
                            type="submit"
                            value="submit"
                        >
                            Create account
                        </button>
                    </form>
                </div>
            </div>
            
        </>
    );
};
