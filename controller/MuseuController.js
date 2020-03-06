'use strict'

//const mongoose = require('mongoose'),
//Museu = mongoose.model('Museu');

const axios = require('axios');
const linkBuscarMuseus = require('./Constantes/Constantes');

exports.consultarMuseus = (req, res) => {
    axios.get(linkBuscarMuseus.linkMuseu)
    .then( (response, err) => {
            if (err){
                res.send(err)
            } else {
                res.send(response.data)
            }
        }
    )
}