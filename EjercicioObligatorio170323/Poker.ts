//Clase hija de Juegos Casino que extiende de ella

import { JuegosCasino } from "./JuegosCasino";

export class Poker extends JuegosCasino{ 
private maxJugPorMesa: number;
private mesaPk:number
private maxMesasPk:number
public constructor(mesaPk:number){
super()
this.maxJugPorMesa=9
this.mesaPk=mesaPk
this.maxMesasPk=10
    }
    
    public setJugPkAlta(){
        if(this.cantJugPorMesa >= 4 && this.cantJugPorMesa<this.maxJugPorMesa) {
         return `el total de jugadores es: ${this.cantJugPorMesa++ } ,puedes seguir sumando jugadores`
        }else{
           return `la cantidad maxima de jugadores es:${this.maxJugPorMesa } ,la mesa completó su cupo `
        }
       } 
    public setJugPkBaja(){
        if(this.cantJugPorMesa > 4 && this.cantJugPorMesa<=this.maxJugPorMesa) {
         return `el total de jugadores es: ${this.cantJugPorMesa -- } ,luego de la baja de un jugador`
        }else{
           return `el total de jugadores es ${this.cantJugPorMesa } ,no puedes jugar con menor cantidad de jugadores `
        }
       }    
       public setMesaPkAlta(){
        if(this.mesaPk >= 0 && this.mesaPk<this.maxMesasPk) {
         return `el total de mesas es: ${this.mesaPk++ } ,puedes seguir sumando mesas`
        }else{
           return `la totalidad de ${this.maxMesasPk } mesas se encuentra ocupada `
        }
       } 
    public setMesaPkBaja(){
        if(this.mesaPk > 0 && this.mesaPk <= this.maxMesasPk) {
         return `el total de mesas es: ${this.mesaPk-- } ,se cerró una mesa`
        }else{
           return `las mesas activas son: ${this.mesaPk } ,no quedan mesas en juego `
        }
       }    
    public getInfo(){
        return this
    }
    }

