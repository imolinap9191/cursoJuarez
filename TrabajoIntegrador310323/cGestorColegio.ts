import Profesor from "./cProfesor";
import Alumno from "./cAlumno";
import {Materia,Asignatura} from "./cMateria"
import Curso from "./cCurso";
const {guardar,leer,check,escribir} = require ('./formulas.ts')
const fs =require('fs')
const readlineSync=require('readline-sync')
export default class GestorColegio {
    nombre: string;
    constructor(nombre:string){
        this.nombre=nombre;
    }
   //ver como incluir materias seleccionadas
 matricularAlumno(){
    let nombre:string = readlineSync.question('Escriba el nombre del alumno: ').toLocaleLowerCase();
    let apellido:string = readlineSync.question('Escriba el apellido del alumno: ').toLocaleLowerCase();
    let cantMatInsc= Number(readlineSync.question('¿A cuantas meterias se quiere anotar (maximo 8 materias)?: '))
    let materias=["matematica","literatura","historia","geografia","biologia","fisica","ingles","edFisica"]
        for (let i = 0; i < cantMatInsc; i++) {
            let matInsc= readlineSync.keyInSelect(materias,"a cuales de las materias existentes se quiere inscribir, al finalizar indique 0")
            const asignInsc = materias[i];
            console.log(matInsc)
            }
            let newAlumno =new Alumno(nombre,apellido,materias) // no guarda la cantidad de materias seleccionadas porque no esta dentro del constructor de new Alumno¿como incluirlo?
            let pathAlumno = './Archivos-Json/Alumnos.json'
    guardar (pathAlumno,newAlumno)
       
  } 
agregarCurso(){
    const curso=readlineSync.question("ingresar nombre del curso: ");
    const crearCurso= new Curso(curso);
    let pathCurso= "./Archivos-Json/Curso.json";
    console.log(crearCurso);
    guardar(pathCurso,crearCurso)
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
}


