import Rueda from "./Rueda"
class Auto{
    public patente: string;
    public modelo: string;
    public marca: string;
    public rueda:Rueda
    protected velocidadActual: number;
    protected velocidadMax: number=200;
    public encendido: boolean;
    constructor(patente:string, modelo:string, marca:string,rueda:Rueda){
       this.patente = patente;
       this.modelo = modelo;
       this.marca = marca;
       this.velocidadActual = 0;
       this.velocidadMax = 0;
       this.encendido = false;
       this.rueda=rueda;
    }
    encenderApagar(){
       if(this.encendido === true){
           this.encendido = false;
       } else {
           this.encendido = true;
       }
    }
     acelerar(){
       this.velocidadActual = this.velocidadActual + 10;
    }
    frenar(){
       this.velocidadActual = this.velocidadActual - 10;
    }
   }
   export default Auto  