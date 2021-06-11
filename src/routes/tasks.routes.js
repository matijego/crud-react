//CRUD DE BASE DE DATOS MONGODB


const express = require('express');
const router = express.Router();

const Persona = require('../models/persona');

router.get('/', async (req, res) => {
    const personas = await Persona.find();
    res.json(personas);
    
});

//BUSCAR POR ATRIBUTO DEL OBJETO QUE NO SEA SU ID
router.get('/nombre/:nombre', async (req, res) => {
    const personas = await Persona.find({nombre: req.params.nombre});
    res.json(personas);
    
});


router.get('/:id', async (req, res) => {
    const persona = await Persona.findById(req.params.id);
    res.json(persona);
});




router.post('/', async (req, res) => {
    const {nombre, edad, nacionalidad, dni} = req.body;
    const persona = new Persona({nombre, edad, nacionalidad, dni});
    await persona.save();
    res.json('Datos guardados.');

});

router.put('/:id', async(req, res) => {
    const {nombre, edad} = req.body;
    const nuevaPersona = {nombre, edad, nacionalidad, dni};
    await Persona.findByIdAndUpdate(req.params.id, nuevaPersona);
    res.json('Datos actualizados');
});
    
router.delete('/:id', async(req, res) => {
    await Persona.findByIdAndDelete(req.params.id);
    res.json('Datos eliminados.')
});


module.exports = router;