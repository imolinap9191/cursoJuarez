//Clase Padre de Poker y BlackJack

export class JuegosCasino{
    protected cantCartasPorMesa:number;
    protected cantJugPorMesa: number;
    
    public constructor(){
        this.cantCartasPorMesa=52
        this.cantJugPorMesa=5
        }
    public getInfo(){
        return this
    }
}
