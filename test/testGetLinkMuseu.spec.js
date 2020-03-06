const chai = require('chai');
const expect = chai.expect;

const museuTest = require('../controller/MuseuController');
const json = require('convert-csv-to-json');
describe('Testando retorno do link de consulta a API da Prefeitura', () =>{
    it('Buscando link...',()=>{
      expect(museuTest.consultarMuseus());
    })
    /*it('should transition with the correct event', () => {
        new Promise((resolve, reject) => {
        }).then((resolve) => {
          let file = json.getJsonFromCsv(atualizarMuseu());
          for( i=0;i<file.lenth;i++){
            console.log(file[i]);
       }
          expect(museuTest.atualizarMuseu().to.not.null)
          assert(resolve.action === 'DONE', 'should change state');
        })
        .catch((reject) => {
          console.warn("Error")
          //assert.isNotOk(reject,'Promise error');
        });
      });*/
});