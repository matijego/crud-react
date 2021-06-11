const mongoose = require('mongoose');

const urlMongo = 'mongodb+srv://matijego:matias199797@cluster0.fwq90.mongodb.net/Cluster0?retryWrites=true&w=majority';

mongoose.connect(urlMongo)
    .then(db => console.log('La base de datos está conectada'))
    .catch(err => console.error(err));



module.exports = mongoose;