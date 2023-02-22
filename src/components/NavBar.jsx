import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div>
            <nav id="botonera" className="navbar navbar-expand-lg bg-grey shadow-lg p-3 mb-5 bg-grey rounded">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex flex-column" href="/"><img src="./imagenes/gem.svg" alt="Logo" width="30" height="30" className="d-inline-block align-text-top"></img><h5 className="text-muted">Citrino Store</h5></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="/" aria-current="page">Home</a>
                            </li>                           
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/categoria/cristales">Cristales</Link></li>
                                    <li><Link className="dropdown-item" to="/categoria/gemas">Gemas</Link></li>
                                    <li><Link className="dropdown-item" to="/categoria/piedras">Piedras</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#"aria-current="page">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <CartWidget />
                </div>
            </nav>

        </div>
    );
};

export default NavBar;