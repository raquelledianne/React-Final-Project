
import React from 'react'
import { Link } from "react-router-dom";
import logoImage from '../logo.png'


export default function Header({ toggleModal }) {
  return (
    <nav>
      <div className="row nav__row">
        <div className="nav__logo">
          <img className="nav__logo--img" src={logoImage} alt="logo" />
        </div>
        <ul className="nav__links">
          <li className="nav__link">
            <Link to="/" className="nav__link--anchor link__hover-effect">Home</Link>
          </li>
          <li className="nav__link">
            <Link to="/main" className="nav__link--anchor link__hover-effect">Find Movies</Link>
          </li>
          <li className="nav__link">
            <button className="nav__link--contact nav__link--anchor click" onClick={toggleModal}>Contact</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}