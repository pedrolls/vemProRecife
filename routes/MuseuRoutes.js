'use strict'
const rotaMuseu = require('../controller/MuseuController');

module.exports = function(app){
    // return rotaMuseu;
    app.route('/museus')
    .get(rotaMuseu.listarTodosOsMuseus)
    //Rota para buscar museu por nome
    app.route('/consultarMuseuPorNome')
    .get(rotaMuseu.buscarMuseuPorNome)

};