export default class Equipo{
protected id:string;
protected descripcion:string;
protected fechaFab:Date;
protected fechaInst:Date;
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
//Declaro instancias para poner en practica funciones
const equipoOne : Equipo= new Equipo("69818573807949","equipo1",new Date("2022-01-10"), new Date("2023-03-09"));
const equipoTwo : Equipo= new Equipo("69818573807950","equipo2",new Date("2022-01-12"), new Date("2023-03-10"));
const equipoThree : Equipo= new Equipo("69818573807951","equipo3",new Date("2022-01-15"), new Date("2023-03-11"));
//creo array para manipular datos y almacenarlos
const stockEquipos:Equipo[]=[]
//inserto las 3 intancias creadas
equipoOne.agregar_equipo(equipoOne,stockEquipos)
equipoTwo.agregar_equipo(equipoTwo,stockEquipos)
equipoThree.agregar_equipo(equipoThree,stockEquipos)
//modifico nombre de equipoOne
equipoOne.editar_equipo("69818573807949",stockEquipos,"equipo1A")
//eliminamos equipoOne
equipoOne.eliminar_equipo("equipo1A",stockEquipos)
//consultamos si se encuentra equipoOne
equipoOne.leer_equipo("equipo1",stockEquipos)//confirmamos que no se encuentra en base de datos
equipoTwo.leer_equipo("69818573807950",stockEquipos)//confirmamos que existe en base de datos




