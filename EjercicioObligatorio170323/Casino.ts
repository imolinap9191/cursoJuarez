/*
Consigna:
----------
Crear una superclase JuegoDeCasino.
Crear dos clases que hereden de ella (pueden ser juegos puntuales, craps,
tragamonedas, ruleta, BlackJack, etc…)
Luego, aplicar composición entre una clase Casino y las dos clases hijas de JuegodeCasino.
Crear los diagramas de clases de la solución que propongan. */

//Implementacion y composicion  de clases creadas en clase Casino
import { BlackJack } from "./Blackjack";
import { Poker } from "./Poker";
import { JuegosCasino } from "./JuegosCasino";
export class Casino{
    private nombre:string;
    private fechaJuego: Date;
    private mesasPoker: Poker;
    private mesasBj: BlackJack ;
    public constructor(nombre:string,fechaJuego:Date,mesasPoker:Poker, mesasBj:BlackJack){
        this.fechaJuego=fechaJuego
        this.nombre=nombre
        this.mesasBj=mesasBj
        this.mesasPoker=mesasPoker
    }
    public getInfo(){
        return this
    }
}
//Creo instancia de clase Blackjack
const mesasBj:BlackJack=new BlackJack(3)
console.log(mesasBj.getInfo())
//Creo instancia de clase Poker
const mesasPk:Poker = new Poker(7)
console.log(mesasPk.getInfo())
//Creo instancia de clase Juegos Casino
const juegosVigentes : JuegosCasino= new JuegosCasino
console.log(juegosVigentes.getInfo())
//Creo instancia de clase Casino
const casino01:Casino=new Casino("casino01",new Date("2023-03-18"),mesasPk,mesasBj)
console.log(casino01.getInfo())