import Equipo from "./equipo"
import {Motor , Efic} from "./Motor"

enum Combustible {
    gasoil,nafta,gas
  }
export default class M_Combustible extends Motor{
    private cilindros:number;
    private tipoCombustible:Combustible;
    constructor(cilindros:number,tipoCombustible:Combustible,id:string,descripcion:string ,fechaFab:Date,fechaInst:Date,potenciaHp:number, eficiencia:Efic, fabricante:string ){
        super(id,potenciaHp,eficiencia,fabricante,descripcion,fechaFab,fechaInst)
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
        return combustion[Comb] || "no se reconoce dicho combustible, intente nuevamente";
      }
      public getInfo(): string {
        return `
        ID:          ${this.id}
        Cilindros:   ${this.cilindros}
        Combustion:  ${this.getCombustible(this.tipoCombustible)}
        Descripcion: ${this.descripcion}
        Fecha Fabric: ${this.fechaFab}
        Fecha Instalacion: ${this.fechaInst}
        Potencia HP: ${this.potenciaHp}
        Eficiencia:    ${this.getEfic(this.eficiencia)}
        Fabricante: ${this.fabricante}
        `;
      } }
      
        //Declaro instancias para poner en practica funciones
        const MotorC1:M_Combustible=new M_Combustible(6,Combustible.gasoil,"77798479826749","MotorC1",new Date("2020-05-04"),new Date("2023-03-09"),140,Efic.A,"Motores S.A")
        const MotorC2:M_Combustible=new M_Combustible(6,Combustible.nafta,"77798479826750","MotorC2",new Date("2020-05-05"),new Date("2023-03-10"),140,Efic.B,"Motores S.A")
        const MotorC3:M_Combustible=new M_Combustible(6,Combustible.gasoil,"77798479826751","MotorC3",new Date("2020-05-06"),new Date("2023-03-11"),140,Efic.C,"Motores S.A")
        //creo array para manipular datos y almacenarlos
        const stockMotoresC:M_Combustible[]=[]
        //inserto las 3 intancias creadas
        MotorC1.agregar_equipo(MotorC1,stockMotoresC)
        MotorC2.agregar_equipo(MotorC2,stockMotoresC)
        MotorC3.agregar_equipo(MotorC3,stockMotoresC)
        //modifico nombre de MotorC1
        MotorC1.editar_equipo("77798479826749",stockMotoresC,"MotorC1A")
        //eliminamos MotorC1
        MotorC1.eliminar_equipo("MotorC1A",stockMotoresC)
        //consultamos si se encuentra MotorC1
        MotorC1.leer_equipo("MotorC1A",stockMotoresC)     
        //utilizo funcion get.Info para mostrar con estructura los datos
        console.log(MotorC1.getInfo())




      /*-----------------------------------------------------------------------------------------------------*/
    /*public agregar_motorC(motor: M_Combustible, buscador: M_Combustible[]){
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
    */