import { Deporte, Jugador } from "./ClaseJugador";
const fs =require ('fs')
const readlineSync =require('readline-sync')
export default class GestorClub{
constructor(){
    fs.writeFileSync('./socios.json','[]')
}
data() { return JSON.parse(fs.readFileSync('./socios.json'))}

agregarSocio(){
    let nombre =readlineSync.question('Escriba nombre del socio:').toLowerCase();
    let apellido =readlineSync.question('Escriba apellido del socio:').toLowerCase();
    let fechaNacimiento =readlineSync.question('Escriba fecha nacimiento del socio en formado YYYY/MM/DD:');
    let documento =readlineSync.question('Escriba documento del socio:');
    let telefono =readlineSync.question('Escriba numero telefono del socio:')
    let arrayDeporte =["Futbol","Basket","Zumba","Voley","Natacion","Gym"]
    let deporte = readlineSync.keyInSelect(arrayDeporte , 'seleccione un deporte de los existentes')
    let nuevoSocio= new Jugador(nombre,apellido,fechaNacimiento,documento,telefono,deporte)
    let socios =[...this.data() , nuevoSocio]
    fs.writeFileSync('./socios.json', JSON.stringify(socios,null,2));
}
buscarPorNombre(nombre:string){
    let nombreSocio=this.data().find((socio:{nombre:string})=> socio.nombre === nombre.toLowerCase())
    console.log(nombreSocio)
    return nombreSocio
}
buscarPorApellido(apellido:string){
    let apellidoSocio=this.data().find((socio:{apellido:string})=> socio.apellido === apellido.toLowerCase())
    console.log(apellidoSocio)
    return apellidoSocio
}
buscarPorDNI(documento:any){
    let documentoSocio:number=this.data().find((socio:{documento:number})=> socio.documento === documento)
    console.log(documentoSocio)
    return documentoSocio
}
buscarPorContacto(telefono:any){
    let telefonoSocio:number=this.data().find((socio:{telefono:number})=> socio.telefono === telefono)
    console.log(telefonoSocio)
    return telefonoSocio
} 
}
