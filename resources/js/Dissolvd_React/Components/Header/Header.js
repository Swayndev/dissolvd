import React, { Fragment, useContext} from "react";

import { Link, useNavigate } from "react-router-dom";
import logobd from "../../img/logobd.svg";
import SearchBar from "../SearchBar/SearchBar";
import Modal from "react-modal";
import axios from "axios";

import "./Header.css";
import { useState } from "react";
import LoginModal from "./LoginModal/LoginModal";
import { UserContext } from "../../../context/context";

export const Header = ({ setQuery, query }) => {

    const [modalIsOpen, setIsOpen] = useState(false);
    

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const { user, setUser } = useContext(UserContext);

    const navigate = useNavigate();

    //
    const handleLogout = async () => {
        // e.preventDefault();

        const responselogout = await axios.post("/logout");
        setUser(responselogout);
        
        navigate("/");
        location.reload()
    };


    return (
        <div className="header-wrap">
            <header className="header">
                {/* NAV BAR LOGOS */}
                <div className="logo">
                    {/*  LOGO FOR BROWSER VERSION */}
                    <Link to="/">
                        <img
                            className="logo--big"
                            src={logobd}
                            alt="dissolvd_logo"
                        />
                    </Link>
                </div>
                {/* NAV BAR DESKTOP */}
                <div className="desktop open">
                    <Link to="/" className="desktop--item underline">
                        home
                    </Link>
                    {!user ? (
                        <Fragment>
                            <a
                                onClick={openModal}
                                className="desktop--item underline"
                            >
                                Log in
                            </a>
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                contentLabel="Example Modal"
                                className="sign-in-modal"
                            >
                                <LoginModal />
                            </Modal>

                            <Link
                                to="/register"
                                className="desktop--item underline"
                            >
                                register
                            </Link>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <Link
                                to="/user"
                                className="desktop--item underline"
                            >
                                {user.username}
                                {/* */}
                            </Link>
                            <a
                                onClick={handleLogout}
                                className="desktop--item underline"
                            >
                                Log out
                            </a>
                        </Fragment>
                    )}

                    <Link to="/about-us" className="desktop--item underline">
                        about us
                    </Link>

                    <SearchBar setQuery={setQuery} query={query} />
                </div>
            </header>
        </div>
    );
};
