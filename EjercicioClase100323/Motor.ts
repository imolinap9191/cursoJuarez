enum Efic {
    A,B,C,D,E,F,G
  }
  export default
class Motor{
    private id:string;
    private potenciaHp:number;
    private eficiencia:Efic;
    private fabricante:string;
    constructor(id:string,potenciaHp:number,eficiencia:Efic,fabricante:string){
    this.id=id;
    this.potenciaHp=potenciaHp;
    this.eficiencia=eficiencia;
    this.fabricante=fabricante
    }
    private getEfic(eficiencia: Efic): string {
        const norma = {
          0: "A",
          1: "B",
          2: "C",
          3: "D",
          4: "E",
          5: "F",
          6: "G"
        };
        return norma[eficiencia];
      }
      public getInfo(): string {
        return `
        ID:   ${this.id}
        Potencia HP: ${this.potenciaHp}
        Eficiencia:    ${this.getEfic(this.eficiencia)}
        Fabricante: ${this.fabricante}
        `;
      }
    public agregar_motor(motor: Motor, buscador: Motor[]){
        if(buscador.push(motor)){
            console.log('Se ha añadido ', motor.id, ' a la base de datos', buscador);
        } else{
            console.log('El motor', motor.id, ' No se ha podido añadir a la base de datos');
            
        }
    }
    
    public leer_motor(dispositivo: string, buscador: Motor[]){
        let motorEncontrado = buscador.find(m => m.id === dispositivo )
        if(motorEncontrado){
            console.log(dispositivo, ' Existe en base de datos', motorEncontrado)
            return motorEncontrado
        } else{
            console.log(dispositivo, ' No existe en base de datos');
            
        }
    }
    
    public editar_motor(dispositivo: string, buscador: Motor[], dato: string){
        let motorModificar = this.leer_motor(dispositivo, buscador)
        if(motorModificar){
            motorModificar.id = dato;
            console.log('El dispositivo', dispositivo, ' Ha sido modificado y ahora se llama ', dato);
        }
        else {
            console.log('El dispositivo no se ha podido modificar');
            
        }
        
    }
    
    public eliminar_motor(dispositivo: string, buscador: Motor[]): any {
        let motorEncontrado = buscador.findIndex(m2 => m2.id == dispositivo);
        if(motorEncontrado >= 0){  
            buscador.splice(motorEncontrado, 1)
            console.log('dispositivo eliminado', dispositivo);
            console.log(buscador);
            return buscador;
        } else {
         console.log('El dispositivo ', dispositivo, 'no ha sido eliminado');
        }
    }
    }
    const motorTwo: Motor= new Motor ("45",24,Efic.A,"juan");

    console.log(motorTwo.getInfo())