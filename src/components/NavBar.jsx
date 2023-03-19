import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top" id="botonera">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="./imagenes/gem.svg" alt="Logo" width="40" height="30" className="d-inline-block animate__animated animate__flip align-text-top"/>Citrino Store
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to={`/categoria/${"cristales"}`}>Cristales</Link></li>
                                <li><Link className="dropdown-item" to={`/categoria/${"gemas"}`}>Gemas</Link></li>
                                <li><Link className="dropdown-item" to={`/categoria/${"piedras"}`}>Piedras</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>                
            <div>
                <CartWidget />
            </div>
        </nav >
    );
};

export default NavBar;