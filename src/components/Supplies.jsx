//import {Link} from 'react-router-dom'
import React, {useRef} from 'react'
import {useParams} from 'react-router-dom' 
import Axios from 'axios'
import io from 'socket.io-client';




const Supplies = () => {
    const socketRef = useRef();
    const {id} = useParams();
    const [datos, setDatos] = React.useState([]);

    const [proveedor, setProveedor] = React.useState({
        nombre: '',
        descripcion: ''
    })


    React.useEffect(() => {
       
        socketRef.current = io.connect("http://localhost:1997");
        
        socketRef.current.on("recibeProveedor", async () => {
            const data = await fetch(`http://localhost:1997/api/providers`);
            const datos = await data.json()
            setDatos(datos.body);
            console.log('Proveedor enviado por socket: ' + datos)
        });

        const obtenerDatos = async() => {
        
            const data = await fetch(`http://localhost:1997/api/providers`);
            const datos = await data.json()
            setDatos(datos.body);
            console.log('test 1')
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
        socketRef.current.emit('recibeProveedor', 'dato enviado');
        let url = "http://localhost:1997/api/providers";
        Axios.post(url,{provName: proveedor.nombre, description: proveedor.descripcion})
            .then(response => {
                
                console.log(response);
            });
        socketRef.current.emit('recibeProveedor', 'dato enviado');
        alert('Proveedor: ' + proveedor.nombre +' agregado!')
        proveedor.nombre=""
        proveedor.descripcion=""
    }


    return (
        <div className="container-fluid">
        
        <div className='row'>
  

            <div className="col-6">
            <h1 className="text-center mt-3">Proveedor:</h1>
            <form className="" onSubmit={cargarDatos}>
                <div className="p-5">
                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="" placeholder="Ingresar nombre" name="nombre"  onChange={controladorInput}/>
                    
                </div>

                <div className="form-group">
                    <label >Descripción</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Ingresar descripción" name="descripcion"  onChange={controladorInput}/>
                </div>


                <button type="submit" className="btn btn-outline-primary">Cargar</button>
                </div>
                
                
                
            </form>
            </div>
            <div className='col-6 border-left text-center p-5'>
            <h2>Lista de proveedores</h2>
            <select className="form-select text-center mt-4" aria-label="Default select example">
                <option defaultValue>Open this select menu</option>
  


                {
                    
                    datos.map(item => (


                        <option value="1" key={item._id}>{item.provName}</option>


                            
                    ))
                }

            </select>
            </div>
        </div>
        </div>
    )
}

export default Supplies
