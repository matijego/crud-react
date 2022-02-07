import React from 'react'
import {Link} from 'react-router-dom'

const Inicio = () => {
    const [persona, setPersona] = React.useState([]);

    React.useEffect(() => {
        obtenerDatos();
    }, []);

    const obtenerDatos = async() => {
        
        const data = await fetch('http://localhost:1997/api/placas');
        const persona = await data.json()

        //Se debe colocar .body porque la funcion map solo toma arrays
        console.log(persona.body);
        setPersona(persona.body);
        
    };

    return (
        <div className='container'>
            
            <div className="row">
                
                    {
                        
                        persona.map((item, index) => (
                            <div className="col-3 text-center mt-3" key={item._id}>
                                <Link to={`/persona/${item._id}`} key={item._id}>
                                <div className="card shadow-sm">
                                <img className="card-img-top" src={item.urlImg} alt={item.nombre_placa}/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.nombre_placa}</h5>
                                    
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
