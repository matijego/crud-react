import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {

    

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Stock</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
        
                    <Link to="/componente" className="nav-item nav-link active" >FormularioAxios</Link>
                
                </div>

                <div className="navbar-nav">
        
                    <Link to="/supplies" className="nav-item nav-link active" >Insumos</Link>
                
                </div>
            </div>
        </nav>
    )
}

export default Navbar
