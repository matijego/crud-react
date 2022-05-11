//import {Link} from 'react-router-dom'
import React from 'react'





const SelectProducts = () => {

    const [datos, setDatos] = React.useState([]);

    React.useEffect(() => {
       

        const obtenerDatos = async() => {
        
            const data = await fetch(`http://localhost:1997/faniota/api/products`);
            const datos = await data.json()
            setDatos(datos.body);
            console.log('test 1')
        };
        obtenerDatos();

    }, []);



    return (
        
            <select className="form-select" aria-label="Default select example">
                <option defaultValue hidden>Selecciona el producto</option>

                {
                    
                    datos.map(item => (
                        <option value={item.product_id} key={item.product_id}>{item.product}</option>  
                    ))
                }

            </select>

    )
}

export default SelectProducts
