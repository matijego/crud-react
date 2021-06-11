//CRUD DE BASE DE DATOS MONGODB

const express = require('express');
const router = express.Router();

const Mesa = require('../models/mesa');

router.get('/', async (req, res) => {
    const mesa = await Mesa.find();
    res.json(mesa);
    
});

router.post('/', async (req, res) => {
    const {numero, token, integrantes} = req.body;
    const mesa = new Mesa({numero, token, integrantes});
    await mesa.save();
    res.json('Datos guardados.');

});


module.exports = router;