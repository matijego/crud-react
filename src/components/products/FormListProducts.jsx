//import {Link} from 'react-router-dom'
import React from 'react'
import {useParams} from 'react-router-dom' 
import Axios from 'axios'
//import io from 'socket.io-client';




const FormListProducts = () => {
//    const socketRef = useRef();
    const {id} = useParams();
    const [datos, setDatos] = React.useState([]);

    const [proveedor, setProveedor] = React.useState({
        nombre: '',
        descripcion: ''
    })


    React.useEffect(() => {
       
/*         socketRef.current = io.connect("http://localhost:1997");
        
        socketRef.current.on("recibeProveedor", async () => {
            const data = await fetch(`http://localhost:1997/faniota/api/products`);
            const datos = await data.json()
            setDatos(datos.body);
            console.log('Proveedor enviado por socket: ' + datos)
        }); */

        const obtenerDatos = async() => {
        
            const data = await fetch(`http://localhost:1997/faniota/api/products`);
            const datos = await data.json()
            setDatos(datos.body);
            console.log(datos.body)
        };
        obtenerDatos();

    }, [id]);

    
    
    //CAPTURADOR DE DATOS INGRESADOS EN EL INPUT EN TIEMPO REAL
    const controladorInput = (event) => {
        
        setProveedor({
            //copia los datos para no reescribirlo
            ...proveedor,
            [event.target.name]: event.target.value

        });
    };


    //ENVÍA LOS DATOS CAPTURADOS DE LOS INPUTS CON ONCHANGE Y LOS ENVÍA A LA API
    const cargarDatos = (event) =>{
        //EVITA LA RECARGAR DE LA PÁGINA AL PRESIONAR EL BOTÓN SUBMIT
        event.preventDefault();
        console.log(proveedor.nombre + ' ' + proveedor.descripcion)
//        socketRef.current.emit('recibeProveedor', 'dato enviado');
        let url = "http://localhost:1997/faniota/api/products";
        Axios.post(url,{name: proveedor.nombre})
            .then(response => {
                
                console.log(response);
            });
//        socketRef.current.emit('recibeProveedor', 'dato enviado');
        alert('Producto: ' + proveedor.nombre +' agregado!')
        proveedor.nombre=""
        proveedor.descripcion=""
    }


    return (
        <div className="container-fluid">
        
        <div className='row'>
  

            <div className="col-4">
            <h2 className="text-center mt-3">+ Producto</h2>
            <form className="" onSubmit={cargarDatos}>

                <div className="p-5">
                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="" placeholder="Ingresar nombre" name="nombre"  onChange={controladorInput}/>
                    
                </div>

                <button type="submit" className="btn btn-outline-primary">Cargar</button>
                </div>
                
                
                
            </form>
            </div>
            <div className='col-8 border-left text-center mt-3'>
            <h2>Lista de productos</h2>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col-2">#</th>
                    <th scope="col-5">Nombre</th>
                    <th scope="col-5">Fecha</th>
                    </tr>
                </thead>
                <tbody>
                {
                    
                    datos.map(item => (


                        <>
                        <tr>
                        <th scope="row" key={item.product_id}>{item.product_id}</th>
                        <td>{item.product}</td>
                        <td>{item.date}</td>
                        </tr>
                        </>
                    ))
                }

                </tbody>
                </table>
            </div>
        </div>
        </div>
    )
}

export default FormListProducts
