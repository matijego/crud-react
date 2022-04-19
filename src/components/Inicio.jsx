import {Link} from 'react-router-dom'
import React from 'react'
let placas = require('./placas.json');

const Inicio = () => {
    const [placa, setPlaca] = React.useState([]);

    React.useEffect(() => {
        obtenerDatos();
    }, []);

    const obtenerDatos = () => {
        
        const data = placas;
        const placa =  data;
        console.log(placa);
        
        setPlaca(placa);
        
    };

    return (
        <div className="container">
        
        <div className='row'>
            
            
                {
                    
                    placa.map(item => (
                       <div className="col-3 mt-4" key={item._id}>
                        <Link to={`/placa/${item._id}`} key={item._id}>
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
