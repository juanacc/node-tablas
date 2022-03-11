const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.red} ${base * i}\n`;
        }

        if (listar) {
            console.log('========================'.green);
            console.log('   Tabla del:'.green, colors.blue(base));
            console.log('========================'.green);

            console.log(consola);
        }

        // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        //     if (err) {
        //         throw err;
        //     }
        //     console.log(`Tabla-${base}.txt creado`);
        // });
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        //console.log(`Tabla-${base}.txt creado`);
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

const crearArchivoPromise = (base = 5) => {
    return new Promise((resolve, reject) => {
        console.log('========================');
        console.log(`   Tabla del: ${base}   `);
        console.log('========================');

        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${base}x${i}=${base * i}\n`;
        }

        console.log(salida);

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        //console.log(`Tabla-${base}.txt creado`);
        resolve(`tabla-${base}.txt`);
    })
}

module.exports = {
    crearArchivo,
    crearArchivoPromise
}