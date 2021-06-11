const express = require('express');
const morgan = require('morgan');
const cors = require('cors');



const {mongoose} = require('./database');
//HABILITA CORS PARA QUE LAS APLICACIONES PUEDAN CONSUMIR LA API
const app = express()
app.use(cors())


//Configuración
app.set('port', process.env.PORT || 4000)


//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Rutas CRUD
app.use('/api/personas', require('./routes/tasks.routes'));
app.use('/api/mesas', require('./routes/mesas.routes'));


//Inicia el servidor
app.listen(app.get('port'), () => { 
    console.log(`El servidor está en el puerto ${app.get('port')}`);
});