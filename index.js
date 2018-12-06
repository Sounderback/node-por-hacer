const { argv } = require('./config/yargs');
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');


//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Crear Por Hacer');
        let tarea = porHacer.crear(argv.description);
        console.log(tarea);
        break;
    case 'listar':
        console.log('Listar Tareas Por Hacer');
        let listado = porHacer.getListado();
        console.log('----- Por Hacer ------'.rainbow);
        for (let tarea of listado) {
            console.log('----------------------'.green);
            console.log(tarea.description);
            console.log(tarea.completado.toString().yellow);
            console.log('----------------------'.red);
        }
        break;
    case 'actualizar':
        console.log('Actualizar Tareas Por Hacer');
        let actualizado = porHacer.actualizar(argv.description, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        console.log('Borrar Tareas Por Hacer');
        let eraser = porHacer.borrar(argv.description);
        console.log(eraser);
        break;
    default:
        console.log('Comando no reconocido');
}