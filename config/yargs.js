const description = {
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear Tarea', { description })
    .command('actualizar', 'Actualizar Tarea', {
        description,
        completado
    }).command('listar', 'Listar tareas', {
        description
    }).command('borrar', 'Borrar tareas', {
        description
    })
    .help()
    .argv;

module.exports = {
    argv
}