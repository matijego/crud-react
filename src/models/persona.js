const mongoose = require('mongoose');
const {Schema} = mongoose;

const PersonaEsquema = new Schema({
    nombre: {type: String, required: true},
    edad: {type: Number},
    nacionalidad: {type: String},
    dni: {type: String}
});

module.exports = mongoose.model('Persona', PersonaEsquema)

