import React from 'react'
import {useParams} from 'react-router-dom' 




const Datos = () => {

    
    const {id} = useParams();
    
    const [datos, setDatos] = React.useState([]);

    React.useEffect(() => {
        const obtenerDatos = async() => {
        
            const data = await fetch(`http://localhost:1997/placas/${id}`);
            const datos = await data.json()
            console.log(datos);
            setDatos(datos);
        };
        obtenerDatos();
    }, [id]);

    

    return (
        <div>

            <h1 className="text-center">Datos de la placa</h1>
            <ul>
                <li>Nombre: {datos.nombre}</li>
                <li>url: {datos.imgUrl}</li>
                
            </ul>

        </div>

    )
}

export default Datos
