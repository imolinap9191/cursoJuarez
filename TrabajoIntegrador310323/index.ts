import Profesor from "./cProfesor";
import Alumno from "./cAlumno";
import {Materia,Asignatura} from "./cMateria"
import GestorColegio from "./cGestorColegio";
const {guardar,leer,check,escribir} = require ('./formulas.ts')


let escuelaUno = new GestorColegio ("Escuela Uno");

//escuelaUno.matricularAlumno() //no incluye en json las materias seleccionadas
//escuelaUno.agregarCurso()
//escuelaUno.agregarProfesor()
//escuelaUno.consultarAlumno()
escuelaUno.modificarAlumno()
//escuelaUno.eliminarAlumno()