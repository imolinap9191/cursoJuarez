export default class M_Electrico{
    private id:string;
    private voltaje:string;
    private consumoKwH:number;
    private isBajoConsumo:boolean;
    constructor(id:string,voltaje:string,consumoKwH:number,isBajoConsumo:boolean){
    this.id=id;
    this.voltaje=voltaje;
    this.consumoKwH=consumoKwH;
    this.isBajoConsumo=isBajoConsumo
    }
    public agregar_motorE(motor: M_Electrico, buscador: M_Electrico[]){
        if(buscador.push(motor)){
            console.log('Se ha añadido ', motor.id, ' a la base de datos', buscador);
        } else{
            console.log('El motor', motor.id, ' No se ha podido añadir a la base de datos');
            
        }
    }
    
    public leer_motorE(dispositivo: string, buscador: M_Electrico[]){
        let MotorE_Encontrado = buscador.find(mE => mE.id === dispositivo )
        if(MotorE_Encontrado){
            console.log(dispositivo, ' Existe en base de datos', MotorE_Encontrado)
            return MotorE_Encontrado
        } else{
            console.log(dispositivo, ' No existe en base de datos');
            
        }
    }
    
    public editar_motorE(dispositivo: string, buscador: M_Electrico[], dato: string){
        let motorE_Modificar = this.leer_motorE(dispositivo, buscador)
        if(motorE_Modificar){
            motorE_Modificar.id = dato;
            console.log('El dispositivo', dispositivo, ' Ha sido modificado y ahora se llama ', dato);
        }
        else {
            console.log('El dispositivo no se ha podido modificar');
            
        }
        
    }
    
    public eliminar_motorE(dispositivo: string, buscador: M_Electrico[]): any {
        let motorE_Encontrado = buscador.findIndex(mE2 =>mE2.id == dispositivo);
        if(motorE_Encontrado >= 0){  
            buscador.splice(motorE_Encontrado, 1)
            console.log('dispositivo eliminado', dispositivo);
            console.log(buscador);
            return buscador;
        } else {
         console.log('El dispositivo ', dispositivo, 'no ha sido eliminado');
        }
    }
    }
    