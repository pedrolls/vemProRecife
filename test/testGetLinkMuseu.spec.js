const chai = require('chai');
const expect = chai.expect;

const museuTest = require('../controller/MuseuController');
const json = require('convert-csv-to-json');
describe('Testando retorno do link de consulta a API da Prefeitura', () =>{
    it('Buscando link...',()=>{
      expect(museuTest.listarTodosOsMuseus());
    })

});