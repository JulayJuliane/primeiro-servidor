/*const lodash = require('lodash');

const array = [1,2,4,4,6,7,1];

const arrayUnico = lodash.uniq(array);

console.log(arrayUnico);*/

const { uniq } = require('lodash');
const {arrayNumeros, arrayLetras} = require('./array');

//console.log(arrayNumeros);
//console.log(arrayLetras);

const arrayNumeroUnico = uniq(arrayNumeros);
const arrayLetraUnico = uniq(arrayLetras);
console.log(arrayNumeroUnico);
console.log(arrayLetraUnico);

