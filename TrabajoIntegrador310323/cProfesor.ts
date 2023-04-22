import IPersona from "./iPersona";
import Alumno from "./cAlumno";
import {Asignatura,Materia} from "./cMateria";
const {v4: uuidv4} = require ('uuid');
export default class Profesor implements IPersona{
    nombre:string;
    apellido:string;
    iD:string;
    alumnos:Alumno[];
    materiaAsignada: Asignatura;

    constructor(nombre:string,apellido:string,materiaAsignada:Asignatura){
        this.nombre=nombre,
        this.apellido=apellido
        this.iD=uuidv4().slice(0,5)
        this.alumnos=[],
        this.materiaAsignada=materiaAsignada
    }
}