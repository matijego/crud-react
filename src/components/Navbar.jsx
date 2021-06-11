import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {

    

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">MERN</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
            
                   
                    <Link to="/tuvieja" className="nav-item nav-link active" >Tuvieja</Link>
                    <Link to="/componente" className="nav-item nav-link active" >FormularioAxios</Link>
                
                </div>
            </div>
        </nav>
    )
}

export default Navbar
