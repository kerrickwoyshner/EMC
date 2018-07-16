import React from "react";
import { Link } from "react-router-dom";
import BlueCross from "./bluecross.png";
import "./Navbar.css";

const Navbar = () => (

    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="mainNav">
    <img className="blue-cross-logo" src={BlueCross}/>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" 
    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
    <ul className="navbar-nav ml-auto">

        <li className="nav-item">
        <a class="nav-link js-scroll-trigger" href="#form">Form</a>
        </li>

        <li className="nav-item">
        <a class="nav-link js-scroll-trigger" href="#records">Records</a>
        </li>


        <li className="nav-item">
        <a class="nav-link js-scroll-trigger" href="#chat">Chat</a>
        </li>

        <li className="nav-item">
        <a class="nav-link js-scroll-trigger" href="#directions">Directions</a>
        </li>

    </ul>
    </div>
    </nav>

);

export default Navbar;