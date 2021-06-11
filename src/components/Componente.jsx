import React from 'react'
import Axios from 'axios'
const Componente = () => {

    const [datos, setDatos] = React.useState({
        nombre: '',
        edad: Number,
        nacionalidad: '',
        dni: ''

    });


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
        console.log(datos.nombre + ' ' + datos.edad + ' ' + datos.nacionalidad + ' ' + datos.dni)
        let url = "http://localhost:4000/api/personas";
        Axios.post(url,{nombre: datos.nombre, edad: datos.edad, nacionalidad: datos.nacionalidad, dni: datos.dni})
            .then(response => {
                console.log(response);
            });
    }



    return (
        <div className="">
            <h1 className="text-center mt-3">Datos:</h1>
            <form className="" onSubmit={cargarDatos}>
                <div className="p-5">
                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="" placeholder="Ingresar nombre" name="nombre" onChange={controladorInput} />
                    
                </div>

                <div className="form-group">
                    <label >Edad</label>
                    <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Ingresar edad" name="edad" onChange={controladorInput} />
                </div>

                <div className="form-group">
                    <label >Nacionalidad</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Ingresar nacionalidad" name="nacionalidad" onChange={controladorInput} />
                </div>

                <div className="form-group">
                    <label >DNI</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Ingresar DNI" name="dni" onChange={controladorInput} />
                </div>
                <button type="submit" className="btn btn-outline-primary">Cargar</button>
                </div>
                
                
                
            </form>
        </div>
    )
}

export default Componente
