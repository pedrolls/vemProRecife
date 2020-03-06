'use strict'

//const mongoose = require('mongoose'),
//Museu = mongoose.model('Museu');

const axios = require('axios');
const linkBuscarMuseus = require('./Constantes/Constantes');

exports.listarTodosOsMuseus = (req, res) => {
    axios.get(linkBuscarMuseus.linkMuseu)
    .then( (response, err) => {
            if (err){
                res.send(err)
            } else {
                res.send(response.data)
            }
        }
    )
};

exports.buscarMuseuPorNome = (req, res) => {    
    var buscarMuseuPorNome = (linkBuscarMuseus.consultarMuseuPorNome + (req.body.name)) + linkBuscarMuseus.idParaConsutlarMuseus;
    console.log(buscarMuseuPorNome)
    axios.get(buscarMuseuPorNome).then(
        (response) => {
            // res.send(response.data);
            res.send(filtrarMuseu(req.body.name,response.data));
        }
    ).catch((err) =>
        res.send(err)
    );
};

function filtrarMuseu(name,museus){
    var fs = require('fs');
    fs.readFile(museus, (err, data) =>
        {
            if(err)
                return err;
            else{
                var lista = data.keys('Objects')
                console.log(lista);
                for( x in lista){
                    console.log(x);
                    if(x.name == name)
                    return x;
                }
            }
                
        }
    )
    // var lista;
    // var resultado;
    // console.log(museus.data.name)
    // for(lista in museus){
    //     console.log(lista)
    //     if(lista.name = String.prototype.includes(name))
    //     resultado = lista;
    //     break;
    // }
    // return resultado;
}