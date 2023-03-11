export default class Equipo{
private id:string;
private descripcion:string;
private fechaFab:Date;
private fechaInst:Date;
constructor(id:string,descripcion:string,fechaFab:Date,fechaInst:Date){
this.id=id;
this.descripcion=descripcion;
this.fechaFab=fechaFab;
this.fechaInst=fechaInst
}
public agregar_equipo(maquina: Equipo, buscador: Equipo[]){
    if(buscador.push(maquina)){
        console.log('Se ha añadido ', maquina.id, ' a la base de datos', buscador);
    } else{
        console.log('El Equipo', maquina.id, ' No se ha podido añadir a la base de datos');
        
    }
}

public leer_equipo(dispositivo: string, buscador: Equipo[]){
    let equipoEncontrado = buscador.find(maq => maq.id === dispositivo )
    if(equipoEncontrado){
        console.log(dispositivo, ' Existe en base de datos', equipoEncontrado)
        return equipoEncontrado
    } else{
        console.log(dispositivo, ' No existe en base de datos');
        
    }
}

public editar_equipo(dispositivo: string, buscador: Equipo[], dato: string){
    let equipoModificar = this.leer_equipo(dispositivo, buscador)
    if(equipoModificar){
        equipoModificar.id = dato;
        console.log('El dispositivo', dispositivo, ' Ha sido modificado y ahora se llama ', dato);
    }
    else {
        console.log('El dispositivo no se ha podido modificar');
        
    }
    
}

public eliminar_equipo(dispositivo: string, buscador: Equipo[]): any {
    let equipoEncontrado = buscador.findIndex(maq2 => maq2.id == dispositivo);
    if(equipoEncontrado >= 0){  
        buscador.splice(equipoEncontrado, 1)
        console.log('dispositivo eliminado', dispositivo);
        console.log(buscador);
        return buscador;
    } else {
     console.log('El dispositivo ', dispositivo, 'no ha sido eliminado');
    }
}
}

const str = '2024-07-21';

const date = new Date(str)

//const equipoTwo : Equipo= new Equipo("12","gfdgfd",Date.toString(),Date.toString() ))