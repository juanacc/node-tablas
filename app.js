require('colors');//tambien se puede usar asi
const { crearArchivo, crearArchivoPromise } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

//const base = 8;

// const [, , arg3 = 'base=5'] = process.argv;//por desestructuracion de array, me quedo con el parametro que viene en la tercera posicion
// const [, base] = arg3.split('=');

//console.log(process.argv);

console.log('base: yargs', argv.base, 'listar: ',argv.listar, 'hasta: ', argv.hasta);

// crearArchivoPromise(base)
//     .then(nombreArchivo => console.log(nombreArchivo, ' creado'))
//     .catch(error => console.log(error));

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(error => console.log(error));

