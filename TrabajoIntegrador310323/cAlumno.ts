import IPersona from "./iPersona";
const {v4: uuidv4} = require ('uuid');
export default class Alumno implements IPersona{
    nombre: string;
    apellido:string;
    iD:string;
    materias:string[]
    notas:number[];
    promedio:number
    constructor(nombre:string,apellido:string, materias:string[],notas:number[],promedio:number ){
        this.nombre=nombre;
        this.apellido=apellido;
        this.iD= uuidv4().slice(0,5)
        this.materias= materias;
        this.notas=notas;
        this.promedio=promedio;
    }
   
      
    

}

