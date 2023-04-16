import Profesor from "./cProfesor";
import Alumno from "./cAlumno";
import {Materia,Asignatura} from "./cMateria"
const {v4: uuidv4} = require ('uuid');

export default class Curso {
    nombre: string;
    cursoId: string;
    profesores:Profesor[];
    alumnos:Alumno[];
    materias:Materia[];

    constructor(nombre:string){
        this.nombre=nombre;
        this.cursoId= uuidv4().slice(0,5);
        this.profesores=[];
        this.alumnos=[];
        this.materias=[];
    }
}