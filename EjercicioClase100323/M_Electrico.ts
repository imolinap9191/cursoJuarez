import Equipo from "./equipo"
import {Motor , Efic} from "./Motor"
export default class M_Electrico extends Motor{
    private voltaje:string;
    private consumoKwH:number;
    private isBajoConsumo:boolean;
    constructor(voltaje:string,consumoKwH:number,isBajoConsumo:boolean,id:string,descripcion:string ,fechaFab:Date,fechaInst:Date,potenciaHp:number, eficiencia:Efic, fabricante:string){
        super(id,potenciaHp,eficiencia,fabricante,descripcion,fechaFab,fechaInst)
    this.voltaje=voltaje;
    this.consumoKwH=consumoKwH;
    this.isBajoConsumo=isBajoConsumo
    } }
//Declaro instancias para poner en practica funciones
const MotorE1:M_Electrico=new M_Electrico("380V",60,true,"77798479826949","MotorE1",new Date("2020-05-04"),new Date("2023-03-09"),3,Efic.A,"Motores S.A")
const MotorE2:M_Electrico=new M_Electrico("380V",60,true,"77798479826950","MotorE2",new Date("2020-05-05"),new Date("2023-03-10"),3,Efic.B,"Motores S.A")
const MotorE3:M_Electrico=new M_Electrico("380V",60,true,"77798479826951","MotorE3",new Date("2020-05-06"),new Date("2023-03-11"),3,Efic.A,"Motores S.A")
//creo array para manipular datos y almacenarlos
const stockMotoresE:M_Electrico[]=[]
//inserto las 3 intancias creadas
MotorE1.agregar_equipo(MotorE1,stockMotoresE)
MotorE2.agregar_equipo(MotorE2,stockMotoresE)
MotorE3.agregar_equipo(MotorE3,stockMotoresE)
//modifico nombre de MotorE1
MotorE1.editar_equipo("77798479826949",stockMotoresE,"MotorE1A")
//eliminamos MotorE1
MotorE1.eliminar_equipo("MotorE1A",stockMotoresE)
//consultamos si se encuentra MotorE1
MotorE1.leer_equipo("MotorE1A",stockMotoresE)     



/*-----------------------------------------------------------------------------------------------------*/
    /*public agregar_motorE(motor: M_Electrico, buscador: M_Electrico[]){
        if(buscador.push(motor)){
            console.log('Se ha añadido ', motor.id, ' a la base de datos', buscador);
        } else{
            console.log('El motor', motor.id, ' No se ha podido añadir a la base de datos');
            
        }
    } }
    
    /*public leer_motorE(dispositivo: string, buscador: M_Electrico[]){
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
    */