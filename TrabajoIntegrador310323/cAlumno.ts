import IPersona from "./iPersona";
import Profesor from "./cProfesor";
import Curso from "./cCurso";
import {Asignatura,Materia} from "./cMateria";
const {v4: uuidv4} = require ('uuid');
export default class Alumno implements IPersona{
    nombre: string;
    apellido:string;
    iD:string;
    materias:Asignatura[];
    notas:number[];
    profesores: Profesor[];
    curso:Curso[];

    constructor(nombre:string,apellido:string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.iD= uuidv4().slice(0,5)
        this.materias=[]
        this.notas=[]
        this.profesores=[]
        this.curso= [];
    }
  
}
