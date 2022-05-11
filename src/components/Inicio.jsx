import {Link} from 'react-router-dom'
import React from 'react'
let categories = require('./categories.json');

const Inicio = () => {
    const [category, setCategory] = React.useState([]);

    React.useEffect(() => {
        obtenerDatos();
    }, []);

    const obtenerDatos = () => {
        
        const data = categories;
        const category =  data;
        console.log(category);
        
        setCategory(category);
        
    };

    return (
        <div className="container">
        
        <div className='row'>
            
            
                {
                    
                    category.map(item => (
                       <div className="col-4 mt-2 p-5" key={item._id}>
                        <Link to={`/${item._id}`} key={item._id}>
                        <div className="card shadow rounded" >
                        
                            <img className="card-img-top" src={item.urlImg} alt=""/>
                            <div className="card-body">
                                <h5 className="card-title text-center">{item.nombre}</h5>
                              
                            </div>
                        </div>
                        </Link>
                       </div>

                            
                    ))
                }
            
        </div>
        </div>

    )
}

export default Inicio
