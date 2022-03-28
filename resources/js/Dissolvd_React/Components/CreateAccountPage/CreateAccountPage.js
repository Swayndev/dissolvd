import React, { useRef, useState } from "react";
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

export const CreateAccountPage = ({
    displayResults,
    movieResults,
    setMovieId,
    setQuery,
}) => {
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
                        className="create-form"
                        ref={myRef}
                        action=""
                        method="post"
                    >
                        <label htmlFor="email"></label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                        />

                        <label htmlFor="username"></label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                        />

                        <label htmlFor="password"></label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                        />
                        <label htmlFor="password_confirm"></label>
                        <input
                            type="password"
                            name="password_confirm"
                            id="password_confirm"
                            placeholder="Confirm password"
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
