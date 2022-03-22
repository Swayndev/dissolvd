import React from "react";
import logobd from "../../img/logobd.svg";
import "./Footer.css";

export const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer__img">
          <img className="footer__img--big" src={logobd} alt="dissolvd_logo" />
        </div>
        <div className="footer__links">
          <p className="footer__links--heading">navigation</p>
          <a className="footer__links--item underline" href="#">
            sign in
          </a>
          <a className="footer__links--item underline" href="#">
            create account
          </a>
          <a className="footer__links--item underline" href="#">
            films
          </a>
          <a className="footer__links--item underline" href="#">
            about us
          </a>
        </div>
        <div className="footer__contact">
          <p className="footer__contact--heading">contact</p>
          <a className="footer__contact--item underline" href="#">
            email
          </a>
          <a className="footer__contact--item underline" href="#">
            instagram
          </a>
          <a className="footer__contact--item underline" href="#">
            twitter
          </a>
          <a className="footer__contact--item underline" href="#">
            facebook
          </a>
        </div>
        <div className="footer__subscribe">
          <p className="footer__subscribe--heading">subscribe</p>
          <p className="footer__subscribe--text">
            Keep up to date with us by subscribing!
          </p>
          <form className="footer__subscribe__email" action method="GET">
            <input
              className="footer__subscribe__email--input"
              type="email"
              placeholder="email address"
              name="email"
              required
            />
            <input
              className="footer__subscribe__email--btn"
              type="submit"
              defaultValue="subscribe"
            />
          </form>
        </div>
      </footer>
    </div>
  );
};
