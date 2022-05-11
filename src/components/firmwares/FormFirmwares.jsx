import React from 'react'
import Axios from 'axios'

const Firmwares = () => {

    const [datos, setDatos] = React.useState({
        productID: '',
        version: '',
        label: ''
    });

    const [file, setFile] = React.useState();
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
        const formData = new FormData();
        formData.append('productID', datos.productID);
        formData.append('version', datos.version);
        formData.append('label', datos.label);
        formData.append("bin", file);
        console.log(datos.productID);

        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }
        
        let url = "http://localhost:1997/faniota/api/firmwares";
        Axios.post(url, formData, config)
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
            <h1 className="text-center mt-3">+ Firmware</h1>
            <form className="d-flex justify-content-center " onSubmit={cargarDatos}>
                <div className="p-5">

                <select className="form-select" aria-label="Default select example" name="productID" onChange={controladorInput}>
                <option defaultValue hidden>Selecciona el producto</option>

                 {
                    
                    product.map(item => (
                        <option value={item.product_id} key={item.product_id}>{item.product}</option>  
                    ))
                } 

            </select>

                <div className="form-group">
                    <label >Nro de versión</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="" name="version" onChange={controladorInput} />
                </div>

                <div className="form-group">
                    <label >Etiqueta</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="" name="label" onChange={controladorInput} />
                </div>

                

                <div className="form-group">
                    <label for="exampleFormControlFile1">.bin</label>
                    <input type="file" className="form-control-file" id="file" name="bin" accept=".bin" onChange={event => {const file = event.target.files[0]; setFile(file);}}/>
                </div>

                <button type="submit" className="btn btn-outline-primary">Cargar</button>
                </div>
                
                
                
            </form>
        </div>
    )
}

export default Firmwares
