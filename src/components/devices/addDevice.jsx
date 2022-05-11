import React from 'react'
import Axios from 'axios'

const Device = () => {

    const [datos, setDatos] = React.useState({
        chip_id: '',
        product_id: '',
    });

    const [product, setProduct] = React.useState([]);

    //CAPTURADOR DE DATOS INGRESADOS EN EL INPUT EN TIEMPO REAL
    const controladorInput = (event) => {
        
        setDatos({
            //copia los datos para no reescribirlo
            ...datos,
            [event.target.name]: event.target.value

        });
    };


    //ENVÍA LOS DATOS CAPTURADOS DE LOS INPUTS CON ONCHANGE Y LOS ENVÍA A LA API
    const cargarDatos = (event) =>{
        //EVITA LA RECARGAR DE LA PÁGINA AL PRESIONAR EL BOTÓN SUBMIT
        event.preventDefault();    
        const url = "http://localhost:1997/faniota/api/devices";
        Axios.post(url, {chip_id: datos.chip_id, product_id: datos.product_id})
            .then(response => {
                console.log(response);
            });
    }

    React.useEffect(() => {
       

        const obtenerDatos = async() => {
        
            const data = await fetch(`http://localhost:1997/faniota/api/products`);
            const product = await data.json()
            setProduct(product.body);
            console.log('test 1')
        };
        obtenerDatos();

    }, []);



    return (
        <div className="">
            <h1 className="text-center mt-3">+ Dispositivo</h1>
            <form className="d-flex justify-content-center " onSubmit={cargarDatos}>
                <div className="p-5">

                <div className="form-group">
                    <label >CHIP ID</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="" name="chip_id" onChange={controladorInput} />
                </div>

                <select className="form-select" aria-label="Default select example" name="product_id" onChange={controladorInput}>
                <option defaultValue hidden>Selecciona el producto</option>

                 {
                    
                    product.map(item => (
                        <option value={item.product_id} key={item.product_id}>{item.product}</option>  
                    ))
                } 

            </select>

                
                <br />
                <button type="submit" className="btn btn-outline-primary mt-3">Cargar</button>
                </div>
                
                
                
            </form>
        </div>
    )
}

export default Device
