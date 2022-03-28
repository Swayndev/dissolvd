import {useState}  from "react";
import "./CreateAccountPage.css";

// IMAGES //
import watch from "../../img/watch.svg";
import post from "../../img/post.svg";
import stars from "../../img/stars.svg";
import discussone from "../../img/discussone.svg";
import discusstwo from "../../img/discusstwo.svg";
import discussthree from "../../img/discussthree.svg";

// IMPORT COMPONENTS //
import SearchResult from "../SearchResult/SearchResult";
import axios from "axios";

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

    // FUNCTIONS AND LOGIC ===============

const handleSubmit = async(e) => {
    e.preventDefault();

    try {
    const response = await axios.post('/register', registerData);
        
        
        console.log('this is reponse.data', response.data)
        
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
                    <button>Already know how?</button>
                </div>
                {/* <div className="create-goal">
                <h3>Our goal</h3>
                <p>
                    our goal is to create a unique platform where you can
                    discover new films without any preconceptions or bias.
                </p>
                <p>
                    dissolvd loves opinions and supports the idea of importance
                    every one of them.
                </p>
                <p className="">
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                </p>
            </div> */}
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

                {/* We do not need action and method in this case */}
                <form onSubmit={handleSubmit}>
                    <br/>
                    <label htmlFor="email">Email</label>
                    <br/>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={registerData.email}
                        onChange={handleChange}
                    />
                    <br/><br/>

                    <label htmlFor="username">Username</label>
                    <br/>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={registerData.username}
                        onChange={handleChange}

                        />
                    <br/><br/>

                    <label htmlFor="password">Create password</label>
                        <br/>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={registerData.password}
                        onChange={handleChange}
                        />
                    <br/><br/>

                    <label htmlFor="password_confirmation">Confirm password</label>
                        <br/>
                    <input
                        type="password"
                        name="password_confirmation"
                        id="password_confirmation"
                        value={registerData.password_confirmation}
                        onChange={handleChange}
                        />
                    <br/><br/>

                    <button >Create account</button>

                </form>
                

                </div>
            </div>
        </>
    );
};
