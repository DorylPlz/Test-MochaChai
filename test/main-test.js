var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var main = require('../main');

//Se requiere igualmente modificar el archivo package.json, Dentro de los scripts agregar test en caso de no existir, y que este contenga:
// "./node_modules/.bin/mocha --reporter spec"
/* 
Ej:
  "scripts": {
    "test": "./node_modules/.bin/mocha --reporter spec"
  },
*/

/* 
describe permite agrupar un conjunto de pruebas que tengan algo en comun
it valida la prueba que hace algo especifico
*/
describe('Test assert function: ', function(){
    describe('Check addTest Function', function(){
        it('Check the returned value using : assert.equal(value, value): ', function(){
            result = main.addTest(1,1);
            assert.equal(result, 2);
        }),
        it('Check the returned value using : assert.equal(value, value): ', function(){
            result = main.addTest(1,3);
            assert.equal(result, 4);
        })
    })
})
/* 
Se recomienda usar expect antes que assert
*/

describe('Test expect function: ', function(){
    describe('Check addTest function', function(){
        it('Check the returned value using: expect(result).to.be.a(value): ', function(){
            result = main.addTest(1,1);
            expect(result).to.equal(2);
        })
    })
})
//ambas hacen exactamente lo mismo, solo modifica la manera de codearlo, se recomiendan las ultimas 2 por que son mas descriptivas

//Existen multiples funciones para crear un resultado esperado, tales como to, be, been, is, tha, which, etc, se pueden ver mas a fondo en
// https://www.chaijs.com/api/bdd/