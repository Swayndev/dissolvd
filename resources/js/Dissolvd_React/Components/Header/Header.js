import React from "react";
import { Link } from "react-router-dom";
import logobd from "../../img/logobd.svg";
import logosd from "../../img/logosd.svg";
import search_icon from "../../img/search_icon.png";
import  SearchBar  from "../SearchBar/SearchBar";
import "./Header.css";

export const Header = ({setQuery}) => {



  return (
    <div className="header-wrap">
      <header className="header">
        {/* NAV BAR LOGOS */}
        <div className="logo">
          <img className="logo--big" src={logobd} alt="dissolvd_logo" />
          <img className="logo--small" src={logosd} alt="dissolvd_logo-small" />
        </div>
        {/* NAV BAR DESKTOP */}
        <div className="desktop open">
          <a className="desktop--item underline" href>
            sign in
          </a>
          <a className="desktop--item underline" href>
            create account
          </a>
          {/* <a className="desktop--item underline" href>
            films
          </a> */}
          {/* <a className="desktop--item underline" href>
            how it works
          </a> */}
          <a className="desktop--item underline" href>
            about us
          </a>
          <SearchBar setQuery={setQuery} />
        </div>
        {/* CHOCOLATE MENU */}
        <div className="menu">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        {/* SEARCH INPUT MOBILE */}
        <div className="input hidden">
          <input
            className="input--mobile"
            type="text"
            placeholder="Search..."
            name="text"
            required
          />
        </div>
        <div className="search">
          <img className="search--mobile" src={search_icon} alt="search-icon" />
        </div>
      </header>
      {/* MOBILE LINKS */}
      <div className="mobile hidden">
        <a className="mobile--item underline" href>
          join us
        </a>
        <a className="mobile--item underline" href>
          sign in
        </a>
        <a className="mobile--item underline" href>
          films
        </a>
        <a className="mobile--item underline" href="#explain">
          how it works
        </a>
        <a className="mobile--item underline" href>
          about us
        </a>
      </div>
    </div>
  );
};
