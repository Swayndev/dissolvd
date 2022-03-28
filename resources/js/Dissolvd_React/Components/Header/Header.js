import React from "react";
import { Link } from "react-router-dom";
import logobd from "../../img/logobd.svg";
import SearchBar from "../SearchBar/SearchBar";
import Modal from "react-modal";
import "./Header.css";
import { useState } from "react";
import { SignInModal } from "./SignInModal/SignInModal";

export const Header = ({ setQuery, query }) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
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
                    <a onClick={openModal} className="desktop--item underline">
                        sign in
                    </a>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Example Modal"
                        className="sign-in-modal"
                    >
                        <SignInModal />
                    </Modal>

                    <Link
                        to="/create-account"
                        className="desktop--item underline"
                    >
                        get started
                    </Link>

                    <Link to="/about-us" className="desktop--item underline">
                        about us
                    </Link>
                    <SearchBar setQuery={setQuery} query={query} />
                </div>
            </header>
        </div>
    );
};
