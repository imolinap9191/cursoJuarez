import Profesor from "./cProfesor";
import Alumno from "./cAlumno";
import {Materia,Asignatura} from "./cMateria"
import { Leccion } from "./cLeccion";
import { log } from "console";
const {guardar,leer,check,escribir} = require ('./formulas.ts')
const fs =require('fs')
const readlineSync=require('readline-sync')
export default class GestorColegio {
    nombre: string;
    constructor(nombre:string){
        this.nombre=nombre;
    }

    dataAlumno(){return JSON.parse(fs.readFileSync('./Archivos-Json/Alumnos.json'))}
    dataProfesor(){return JSON.parse(fs.readFileSync('./Archivos-Json/Profesor.json'))}

/*crearLeccion(){
  let leccion: string = readlineSync.question('Escriba el nombre de la leccion que desea crear: ').toLocaleLowerCase();
  let lecciones = leccion[]
}*/
   
 matricularAlumno(){ let nombre:string = readlineSync.question('Escriba el nombre del alumno: ').toLocaleLowerCase();
 let apellido:string = readlineSync.question('Escriba el apellido del alumno: ').toLocaleLowerCase();
 let cantMatInsc= Number(readlineSync.question('¿A cuantas meterias se quiere anotar (maximo 8 materias)?: '))
 let materias=["matematica","literatura","historia","geografia","biologia","fisica","ingles","edFisica"]
 let arrMat : string[]= [];
 for (let i = 0; i < cantMatInsc; i++) {
         let matInsc= readlineSync.keyInSelect(materias,"a cuales de las materias existentes se quiere inscribir")
         let asignInsc:string = materias[matInsc];
         arrMat.push(asignInsc)
         console.log(asignInsc);
         console.log(arrMat);
         //console.log(matInsc);
         }
        let newAlumno =new Alumno(nombre,apellido,arrMat);
        let pathAlumno = './Archivos-Json/Alumnos.json'
 guardar (pathAlumno,newAlumno)
}

consultarAlumno(iD:string= readlineSync.question('Escriba el iD del alumno: ')){
  let alumnoEncontrado=this.dataAlumno().find((alumno:Alumno)=>alumno.iD === iD);
  if(alumnoEncontrado){
    console.log(iD, 'existe en el gestor colegio', alumnoEncontrado)
    return alumnoEncontrado
  }else{ 
     console.log(iD , 'No existe en el gestor colegio')
     return null
  }
}

modificarAlumno(iD:string = readlineSync.question('Escriba el iD del alumno: ')){
  let pathAlumno = './Archivos-Json/Alumnos.json'
  let alumnoModificar=this.consultarAlumno(iD)
  if(alumnoModificar){
    let dato=readlineSync.question('Escriba el nuevo iD del alumno: ')
    alumnoModificar.iD = dato
      //guardar (pathAlumno,alumnoModificar)------ crea un "nuevo" alumno con iD modificado, no modifica el id del existente
    console.log('El id' ,iD, 'ha sido modificado y ahora se llama', dato)
    //return dato
      //--------------------------- ver porque no guarda el dato modificado.--------------------------------
  }else{
    console.log(iD , 'No existe en el gestor colegio')
  }
}

eliminarAlumno(iD:Alumno = readlineSync.question('Escriba el iD del alumno: ')){
  let alumnoEncontrado=this.dataAlumno().findIndex((alumno: { iD: Alumno })=>alumno.iD === iD);
  if(alumnoEncontrado >= 0){
    this.dataAlumno().slice(alumnoEncontrado, 1)
    console.log('Alumno eliminado', iD);
    console.log(this.dataAlumno);
    let pathAlumno = './Archivos-Json/Alumnos.json'
    guardar (pathAlumno,Alumno)
    return this.dataAlumno;
  }else{
    console.log('Alumno', iD , 'no ha sido eliminado')
  }
}

agregarProfesor(){
    let nombre:string = readlineSync.question('Escriba el nombre del profesor: ').toLocaleLowerCase();
    let apellido:string = readlineSync.question('Escriba el apellido del profesor: ').toLocaleLowerCase();
    let arrayMat=["matematica","literatura","historia","geografia","biologia","fisica","ingles","edFisica"]
    let materiaAsignada= readlineSync.keyInSelect(arrayMat,"¿que materia dicta?: ")
    let newProfesor =new Profesor (nombre,apellido,materiaAsignada)
            let pathProfesor = './Archivos-Json/Profesor.json'
    guardar (pathProfesor,newProfesor)   
  } 
consultarProfesor(iD:Profesor = readlineSync.question('Escriba el iD del profesor: ')){
    let profesorEncontrado=this.dataProfesor().find((profesor: { iD: Profesor; })=> profesor.iD === iD);
    if(profesorEncontrado){
      console.log(iD, 'existe en el gestor colegio', profesorEncontrado)
      return profesorEncontrado
    }else{
      console.log(iD , 'No existe en el gestor colegio')
    }
  }
  eliminarProfesor(iD:Profesor = readlineSync.question('Escriba el iD del profesor: ')){
    let profesorEncontrado=this.dataProfesor().findIndex((profesor: { iD: Profesor; })=>profesor.iD === iD);
    if(profesorEncontrado >= 0){
      this.dataProfesor().slice(profesorEncontrado, 1)
      console.log('Profesor eliminado', iD);
      console.log(this.dataProfesor);
      return this.dataProfesor;
    }else{
      console.log('Profesor', iD , 'no ha sido eliminado')
    }
  }
}


