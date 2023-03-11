enum Combustible {
    gasoil,nafta,gas
  }
export default class M_Combustible{
    private id:string;
    private cilindros:number;
    private tipoCombustible:Combustible;
    constructor(id:string,cilindros:number,tipoCombustible:Combustible){
    this.id=id;
    this.cilindros=cilindros;
    this.tipoCombustible=tipoCombustible
    }
    private getCombustible(Comb:Combustible): string {
        const combustion = {
          0: "gasoil",
          1: "nafta",
          2: "gas",
        };
        return combustion[Comb];
      }
      public getInfo(): string {
        return `
        ID:          ${this.id}
        Cilindros:   ${this.cilindros}
        Combustion:  ${this.getCombustible(this.tipoCombustible)}
        `;
      }
    public agregar_motorC(motor: M_Combustible, buscador: M_Combustible[]){
        if(buscador.push(motor)){
            console.log('Se ha añadido ', motor.id, ' a la base de datos', buscador);
        } else{
            console.log('El motor', motor.id, ' No se ha podido añadir a la base de datos');
            
        }
    }
    
    public leer_motorC(dispositivo: string, buscador: M_Combustible[]){
        let motorEncontrada = buscador.find(k => k.id === dispositivo )
        if(motorEncontrada){
            console.log(dispositivo, ' Existe en base de datos', motorEncontrada)
            return motorEncontrada
        } else{
            console.log(dispositivo, ' No existe en base de datos');
            
        }
    }
    
    public editar_motorC(dispositivo: string, buscador: M_Combustible[], dato: string){
        let motorModificar = this.leer_motorC(dispositivo, buscador)
        if(motorModificar){
            motorModificar.id = dato;
            console.log('El dispositivo', dispositivo, ' Ha sido modificado y ahora se llama ', dato);
        }
        else {
            console.log('El dispositivo no se ha podido modificar');
            
        }
        
    }
    
    public eliminar_motorC(dispositivo: string, buscador: M_Combustible[]): any {
        let motorEncontrado = buscador.findIndex(k2 => k2.id == dispositivo);
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
    