const fs = require('fs');
let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
        else
            console.log('JSON guardado');
    });
}
const cargarDb = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
    //console.log(listadoPorHacer);
}

const crear = (description) => {

    cargarDb();

    let porHacer = {
        description,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const getListado = () => {
    cargarDb();
    return listadoPorHacer;
}

const actualizar = (description, completado = true) => {
    cargarDb();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.description === description;
    });
    //console.log(index);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (description) => {

    cargarDb();

    let nuevoListado = listadoPorHacer.filter(tarea => { return tarea.description !== description; });

    console.log(nuevoListado);

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
    // let index = listadoPorHacer.findIndex(tarea => {
    //     return tarea.description === description;
    // });
    // if (index >= 0) {
    //     listadoPorHacer = listadoPorHacer.slice(index, 1);

    //  guardarDB();
    //  return true;
    // } else {
    //     return false;
    // }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}