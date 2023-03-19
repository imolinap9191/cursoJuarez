//Clase hija de Juegos Casino que extiende de ella

import { JuegosCasino } from "./JuegosCasino";

export class BlackJack extends JuegosCasino{ 
    private maxJugPorMesa: number;
    private mesaBj:number
    private maxMesasBj:number
    public constructor(mesaBj:number){
super()
this.maxJugPorMesa=7
this.mesaBj=mesaBj
this.maxMesasBj=10
    }
    
   
    public setJugBjAlta(){
        if(this.cantJugPorMesa >= 5 && this.cantJugPorMesa<this.maxJugPorMesa) {
         return `el total de jugadores es: ${this.cantJugPorMesa++ } ,puedes seguir sumando jugadores`
        }else{
           return `la cantidad maxima de jugadores es:${this.maxJugPorMesa } ,la mesa completó su cupo `
        }
       } 
    public setJugBjBaja(){
        if(this.cantJugPorMesa > 5 && this.cantJugPorMesa<=this.maxJugPorMesa) {
         return `el total de jugadores es: ${this.cantJugPorMesa -- } ,luego de la baja de un jugador`
        }else{
           return `el total de jugadores es ${this.cantJugPorMesa } ,no puedes jugar con menor cantidad de jugadores `
        }
       }    
       public setMesaBjAlta(){
        if(this.mesaBj >= 0 && this.mesaBj<this.maxMesasBj) {
         return `el total de mesas es: ${this.mesaBj++ } ,puedes seguir sumando mesas`
        }else{
           return `la totalidad de ${this.maxMesasBj } mesas se encuentra ocupada `
        }
       } 
    public setMesaBjBaja(){
        if(this.mesaBj > 0 && this.mesaBj <= this.maxMesasBj) {
         return `el total de mesas es: ${this.mesaBj-- } ,se cerró una mesa`
        }else{
           return `las mesas activas son: ${this.mesaBj } ,no quedan mesas en juego `
        }
       }    
    public getInfo(){
        return this
    }
    }

