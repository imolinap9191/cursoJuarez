
export enum Deporte{
    futbol,basket,zumba,voley,natacion,gym
}
import MiembroClub  from "./AbstMiembroClub";
export class Jugador extends MiembroClub{
deporte:Deporte;

constructor(nombre:string,apellido:string,fechaNacimiento:string,documento:number,telefono:number,deporte:Deporte){
    super(nombre,apellido,fechaNacimiento,documento,telefono)
    this.deporte=deporte
}

}