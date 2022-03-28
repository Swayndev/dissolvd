import React from "react";
import "./SignInModal.css";
import { Link } from "react-router-dom";

export const SignInModal = () => {
    return (
        <form className="signin-form" action="" method="post">
            <label htmlFor="email"></label>
            <input type="email" name="email" id="email" placeholder="Email" />

            <label htmlFor="password"></label>
            <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
            />

            <button className="signin-form-btn" type="submit" value="submit">
                Sign in
            </button>
            <p>
                Don't have an account?{" "}
                <Link to="/create-account">Get started</Link>
            </p>
        </form>
    );
};
