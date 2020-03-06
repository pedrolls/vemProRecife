'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MuseuSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  descricao:{
    type: String,
    required: 'A descrição conta a história do museu'
  },
  bairro:{
    type: String,
    required: 'Bairro o museu é localizado'
  },
  logradouro:{
    type: String,
    required: 'Endereço do museu'
  },
  latitude:{
    type: Number,
    required: 'Latitude geografica do museu'
  },
  longitude:{
    type: Number,
    required: 'Longitude geográfica do museu'
  },
  telefone:{
      type: String,
  },
  site:{
      type: String,
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Museu', MuseuSchema);