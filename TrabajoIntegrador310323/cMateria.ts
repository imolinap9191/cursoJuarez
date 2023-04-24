import Alumno from "./cAlumno";
import Profesor from "./cProfesor";
export enum Asignatura {
    matematica= "matemaricas",literatura="literatura",historia= "historia",geografia="geografia",biologia="biologia",fisica="fisica",ingles="ingles",edFisica="edFisica"
  }
export class Materia{
    nombre:Asignatura;
    alumnos:Alumno[];
    profesor:Profesor[]

    constructor(nombre:Asignatura){
        this.nombre= nombre;
        this.alumnos=[];
        this.profesor=[]
    }

    
 }
