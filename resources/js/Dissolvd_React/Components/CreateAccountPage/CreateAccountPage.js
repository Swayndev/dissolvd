import React from "react";
import "./CreateAccountPage.css";
import watch from "../../img/watch.svg";
import post from "../../img/post.svg";
import stars from "../../img/stars.svg";

export const CreateAccountPage = () => {
    return (
        <div className="create-wrap">
            <div className="create-header">
                <h1>How does it work?</h1>
                <button>Already know?</button>
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
                    (including it's ratings and reviews), first you must watch
                    that film, because you should actually have to see something
                    before having an opinion on it right?
                </p>
            </div>
            <div className="create-post">
                <div className="create-post-body">
                    <img className="create-post-img" src={post} alt=""></img>
                    <div className="create-post-text">
                        <p>step two</p>
                        <h3>Post</h3>
                        <p>
                            Now that you've seen the film, you should post about
                            it! You can leave a review, a rating or simply
                            declare that you have seen it.
                        </p>
                        <img src={stars}></img>
                        <p>It's up to you!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
