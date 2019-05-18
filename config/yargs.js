const descripcion={
        alias:'d',
        demand:true,
        desc:'Descripcion de la tarea por hacer'
}

const completado ={
    alias:'c',
    default:true,
    desc: 'Marca como completado o pendiente la tarea'
}


const argv = require('yargs')
.command('crear','Crea una nueva tarea',{
    descripcion
})
.command('actualizar','Actualiza el estado de la tarea',{
    descripcion,
    completado
})
.command('borrar','Elimina el elemento de la lista',{
    descripcion
})
.command('lp','Elimina el elemento de la lista',{
    completado
})
.help()
.argv;

module.exports={
    argv
}