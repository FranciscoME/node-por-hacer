const fs = require('fs');

let listadoPorHacer =[];



const guardarDB= ()=>{
    let data = JSON.stringify(listadoPorHacer)
    fs.writeFile('./db/data.json',data,(err)=>{
        if(err) throw new Error('No se pudo grabar',err);
    })

}


let getListado= ()=>{
    cargarDB();
    return listadoPorHacer;
}

let getListadoPersonalizado= (completado)=>{
    cargarDB();
    let listadoFiltrado = listadoPorHacer.filter(tarea=>{return tarea.completado===JSON.parse(completado)});

    return listadoFiltrado;

}

const cargarDB= ()=>{

    try {
        listadoPorHacer = require('../db/data.json')
    } catch (error) {
        listadoPorHacer=[];
    }

    
    //console.log(listadoPorHacer);
}


const crear=(descripcion)=>{
    cargarDB();
    let porHacer={
        descripcion,
        completado:false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;

}

const actualizar=(descripcion,completado=true)=>{
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea=>{
        return tarea.descripcion === descripcion
    })

    if(index>=0){
        listadoPorHacer[index].completado=completado;
        guardarDB();
        return true;
    }
    else{
        return false;
    }
}


const borrar = (descripcion)=>{
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea=> tarea.descripcion!==descripcion);
    if(nuevoListado.length!==listadoPorHacer.length){
        listadoPorHacer=nuevoListado;
        guardarDB()
        return true;
    }
    else{
        return false;
    }
}

module.exports={
    crear,
    getListado,
    getListadoPersonalizado,
    actualizar,
    borrar
}