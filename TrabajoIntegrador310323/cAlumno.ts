import IPersona from "./iPersona";
import Profesor from "./cProfesor";
import {Asignatura,Materia} from "./cMateria";
const {v4: uuidv4} = require ('uuid');
const fs =require('fs')
const readlineSync=require('readline-sync')
export default class Alumno implements IPersona{
    nombre: string;
    apellido:string;
    iD:string;
    materias:string[]//Asignatura[];
    notas:number[];
    promedio:number
    constructor(nombre:string,apellido:string, materias:string[],notas:number[],promedio:number /*Asignatura[]*/){
        this.nombre=nombre;
        this.apellido=apellido;
        this.iD= uuidv4().slice(0,5)
        this.materias= materias;
        this.notas=notas;
        this.promedio=promedio;
    }
   
      
    

}

