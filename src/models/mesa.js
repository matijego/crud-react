const mongoose = require('mongoose');
const {Schema} = mongoose;

const MesaEsquema = new Schema({
    numero: {type: String, required: true},
    token: {type: String},
    integrantes: ["nombre"]
});

module.exports = mongoose.model('Mesa', MesaEsquema)

