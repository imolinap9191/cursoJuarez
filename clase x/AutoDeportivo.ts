import Auto from "./Auto"
import Rueda from "./Rueda";
export default class AutoDeportivo extends Auto{
    public cilindrada: string;
    public turbo:boolean;
    velocidadMax:number=300
   constructor(cilindrada:string, patente:string, modelo:string,marca:string,turbo:boolean,rueda:Rueda){
   super(patente,modelo,marca,rueda)
   this.cilindrada=cilindrada;
   this.turbo=turbo;
}
public acelerar(): void {
    this.velocidadActual= this.velocidadActual+50;
}}
let lamborghini:AutoDeportivo= new AutoDeportivo("5000c","abc123","1994","lamborguini",true,ruedaPirelli)
lamborghini.encenderApagar()
lamborghini.acelerar()
lamborghini.acelerar()
console.log(lamborghini)
