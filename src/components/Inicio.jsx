import React from 'react'
import {Link} from 'react-router-dom'

const Inicio = () => {
    const [persona, setPersona] = React.useState([]);

    React.useEffect(() => {
        obtenerDatos();
    }, []);

    const obtenerDatos = async() => {
        
        const data = await fetch('http://localhost:4000/api/personas');
        const persona = await data.json()
        console.log(persona);
        setPersona(persona);
        
    };

    return (
        <div>
            <h1 className="text-center">Personas</h1>
            <ul>
                {
                    
                    persona.map(item => (
                        <Link to={`/persona/${item._id}`} key={item._id}>
                            <li className="mt-2 h4"> Nombre: {item.nombre} </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}

export default Inicio
