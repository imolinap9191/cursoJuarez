import Profesor from "./cProfesor";
import Alumno from "./cAlumno";
import {Materia,Asignatura} from "./cMateria"
import GestorColegio from "./cGestorColegio";
const {guardar,leer,check,escribir} = require ('./formulas.ts')


//Se crea el Gestor para manipular los datos
let escuelaUno = new GestorColegio ("Escuela Uno");

//Funcionalidades

//ALUMNOS
//escuelaUno.matricularAlumno() //FUNCIONA
//escuelaUno.modificarAlumno() //FUNCIONA
//escuelaUno.consultarAlumno() //FUNCIONA
//escuelaUno.eliminarAlumno() //FUNCIONA

//PROFESORES
//escuelaUno.agregarProfesor() //FUNCIONA
//escuelaUno.modificarProfesor() //FUNCIONA
//escuelaUno.consultarProfesor() //FUNCIONA
//escuelaUno.eliminarProfesor() //FUNCIONA