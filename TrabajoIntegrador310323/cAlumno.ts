import IPersona from "./iPersona";
import Profesor from "./cProfesor";
import {Asignatura,Materia} from "./cMateria";
const {v4: uuidv4} = require ('uuid');
export default class Alumno implements IPersona{
    nombre: string;
    apellido:string;
    iD:string;
    materias:string[]//Asignatura[];
    notas:number[];
    profesores: Profesor[];
    constructor(nombre:string,apellido:string, materias:string[] /*Asignatura[]*/){
        this.nombre=nombre;
        this.apellido=apellido;
        this.iD= uuidv4().slice(0,5)
        this.materias= materias;
        this.notas=[];
        this.profesores=[]
    }
}