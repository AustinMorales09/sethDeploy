import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';
import '../css/Navbar.css';



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-sticky-top" >
  <div className="container-fluid">
    <Link className="navbar-brand justify-content-center" to="/"><img src={logo} className="logo" alt="logo"/></Link>
    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/our-story">Our Story</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/menu">Menu</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/photos">Photos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/reservation">Make A Reservation</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={{pathname: "https://www.facebook.com/stylebyform"}} target="_blank"><i className="fab fa-facebook-f"></i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={{pathname: "https://www.instagram.com/stylebyform"}} target="_blank"><i className="fab fa-instagram"></i></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar
