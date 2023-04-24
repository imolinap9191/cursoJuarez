import Profesor from "./cProfesor";
import Alumno from "./cAlumno";
import {Materia,Asignatura} from "./cMateria"
const {guardar,leer,check,escribir} = require ('./formulas.ts')
const fs =require('fs')
const readlineSync=require('readline-sync')
//Se da de alta la clase GestorColegio.
export default class GestorColegio {
    nombre: string;
    constructor(nombre:string){
        this.nombre=nombre;}
    
  dataAlumno(){return JSON.parse(fs.readFileSync('./Archivos-Json/Alumnos.json'))}
  dataProfesor(){return JSON.parse(fs.readFileSync('./Archivos-Json/Profesor.json'))}

//Genera un nuevo alumno consultando nombre/apellido/cantidad de materias a inscribirse/indica las materias existentes
//y luego incorpora las notas y genera el promedio del alumno.
  matricularAlumno(){
  let nombre:string = readlineSync.question('Escriba el nombre del alumno: ').toLocaleLowerCase();
  let apellido:string = readlineSync.question('Escriba el apellido del alumno: ').toLocaleLowerCase();
  let cantMatInsc= Number(readlineSync.question('¿A cuantas meterias se quiere anotar (maximo 8 materias)?: '))
  let materias=["matematica","literatura","historia","geografia","biologia","fisica","ingles","edFisica"]
  let arrMat : string[]= [];
  let arrNotas : number[]= [];
    for (let i = 0; i < cantMatInsc; i++) {
        let matInsc= readlineSync.keyInSelect(materias,"a cuales de las materias existentes se quiere inscribir");
        let notaMatInsc= Number(readlineSync.question('¿Que nota saco?: '))
        let asignInsc:string = materias[matInsc];
        arrMat.push(asignInsc)
        arrNotas.push(notaMatInsc)
        console.log(asignInsc);
        console.log(arrMat);
        }
   let sumaNota= arrNotas.reduce((acc,notaMatInsc)=> acc + notaMatInsc,0)
   console.log(sumaNota);
   let promedio = sumaNota/arrNotas.length
   console.log(promedio);
   let newAlumno =new Alumno(nombre,apellido,arrMat,arrNotas,promedio);
   let pathAlumno = './Archivos-Json/Alumnos.json'
   guardar (pathAlumno,newAlumno)
}

//Verifica la existencia del alumno al buscar el iD una vez encontrado lo devuelve
  consultarAlumno(iD:string = readlineSync.question('Escriba el iD del alumno: ')){
  let alumnoEncontrado=this.dataAlumno().find((alumno: Alumno)=>alumno.iD === iD);
  if(alumnoEncontrado){
    console.log(iD, 'existe en el gestor colegio', alumnoEncontrado)
    return alumnoEncontrado
  }else{
    console.log(iD , 'No existe en el gestor colegio')
  }
}

//modifica al alumno buscado, en la propiedad que se le indica e incorpora el valor que se le asigne con dicho cambio
  modificarAlumno(iD:string = readlineSync.question('Escriba el iD del alumno: '),prop:string = readlineSync.question('Escriba la propiedad del alumno: '),valorAct:string = readlineSync.question('Escriba la actualización del alumno: ')){
  let listadoAlumno=this.dataAlumno();
  let modificarAlumno=listadoAlumno.find((alumno: Alumno)=>alumno.iD === iD);
  if(modificarAlumno){
    console.log("encontro archivo")
    modificarAlumno[prop]=valorAct ;
  }else{
    console.log("no se encontro archivo")
  }
  fs.writeFileSync('./Archivos-Json/Alumnos.json',JSON.stringify(listadoAlumno))
  }

//Busca el alumno a través de su iD y al comprobar su existencia lo elimina
  eliminarAlumno(iD:string = readlineSync.question('Escriba el iD del alumno: ')){
  let listadoAlumno=this.dataAlumno();
  let borrarAlumno=listadoAlumno.findIndex((alumno:Alumno )=>alumno.iD === iD);
  if(borrarAlumno >= 0){
    listadoAlumno.splice(borrarAlumno, 1)
    console.log('Alumno eliminado', iD);
  }else{
    console.log('Alumno', iD , 'no ha sido eliminado')
  }
  fs.writeFileSync('./Archivos-Json/Alumnos.json',JSON.stringify(listadoAlumno))
}

//Genera un nuevo profesor, consultando el nombre/apellido y la selección de la materia que dicta.
  agregarProfesor(){
    let nombre:string = readlineSync.question('Escriba el nombre del profesor: ').toLocaleLowerCase();
    let apellido:string = readlineSync.question('Escriba el apellido del profesor: ').toLocaleLowerCase();
    let arrayMat=["matematica","literatura","historia","geografia","biologia","fisica","ingles","edFisica"]
    let materiaAsignada= readlineSync.keyInSelect(arrayMat,"¿que materia dicta?: ")
    let asign:string = arrayMat[materiaAsignada];
    console.log(asign);
    let newProfesor = new Profesor (nombre,apellido,asign)
    let pathProfesor = './Archivos-Json/Profesor.json'
    guardar (pathProfesor,newProfesor)
  }

//Busca el iD del profesor y luego modifica al mismo en la propiedad que se le indique, incorporando lo que indica el usuario
  modificarProfesor(iD:string = readlineSync.question('Escriba el iD del profesor: '),prop:string = readlineSync.question('Escriba la propiedad del profesor: '),valorAct:string = readlineSync.question('Escriba la actualización del profesor: ')){
    let listadoProfesores=this.dataProfesor();
    let modificarProfesor=listadoProfesores.find((profesor: Profesor)=>profesor.iD === iD);
    if(modificarProfesor){
      console.log("encontro archivo")
      modificarProfesor[prop]=valorAct ;
    }else{
      console.log("no se encontro archivo")
    }
    fs.writeFileSync('./Archivos-Json/Profesor.json',JSON.stringify(listadoProfesores))
    }

//Busca el profesor a traves del iD y devuelve si este existe o no en el archivo Profesor.json.    
  consultarProfesor(iD:string = readlineSync.question('Escriba el iD del profesor: ')){
    let profesorEncontrado=this.dataProfesor().find((profesor:Profesor)=> profesor.iD === iD);
    if(profesorEncontrado){
      console.log(iD, 'existe en el gestor colegio', profesorEncontrado)
      return profesorEncontrado
    }else{
      console.log(iD , 'No existe en el gestor colegio')
    }
  }
//Busca el profesor a través del iD y si éste existe, procede a eliminarlo.
  eliminarProfesor(iD:string = readlineSync.question('Escriba el iD del profesor: ')){
    let listadoProfesores=this.dataProfesor();
    let borrarProfesor=listadoProfesores.findIndex((profesor:Profesor )=>profesor.iD === iD);
    if(borrarProfesor >= 0){
      listadoProfesores.splice(borrarProfesor, 1)
      console.log('Profesor eliminado', iD);
    }else{
      console.log('Profesor', iD , 'no ha sido eliminado')
    }
    fs.writeFileSync('./Archivos-Json/Profesor.json',JSON.stringify(listadoProfesores))
  }

  listAlumnos(){
    console.log(this.dataAlumno());
  }
  listProfesores(){
    console.log(this.dataProfesor());
  }
  
   }
  



















