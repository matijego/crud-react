import React from 'react'
import {useParams} from 'react-router-dom' 

const Datos = () => {

    
    const {id} = useParams();

    const [datos, setDatos] = React.useState([]);

    React.useEffect(() => {
        const obtenerDatos = async() => {
        
            const data = await fetch(`http://localhost:4000/api/personas/${id}`);
            const datos = await data.json()
            console.log(datos);
            setDatos(datos);
        };
        obtenerDatos();
    }, [id]);

    

    return (
        <div>

            <h1 className="text-center">Datos de la persona</h1>
            <ul>
                <li>Nombre: {datos.nombre}</li>
                <li>Edad: {datos.edad}</li>
                <li>Nacionalidad: {datos.nacionalidad}</li>
                <li>DNI: {datos.dni}</li>
            </ul>

        </div>

    )
}

export default Datos
