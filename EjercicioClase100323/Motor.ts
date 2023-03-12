import Equipo from "./equipo";
export {Efic,Motor}
enum Efic {
    A,B,C,D,E,F,G
  }
 
class Motor extends Equipo{
    protected potenciaHp:number;
    protected eficiencia:Efic;
    protected fabricante:string;
    constructor(id:string,potenciaHp:number,eficiencia:Efic,fabricante:string,descripcion:string ,fechaFab:Date,fechaInst:Date){
        super(id,descripcion,fechaFab,fechaInst)
    this.id=id;
    this.potenciaHp=potenciaHp;
    this.eficiencia=eficiencia;
    this.fabricante=fabricante
    }
    protected getEfic(eficiencia: Efic): string {
        const norma = {
          0: "A",
          1: "B",
          2: "C",
          3: "D",
          4: "E",
          5: "F",
          6: "G"
        };
        return norma[eficiencia] || "no se reconoce dicha especificación, intente nuevamente"
      }
      public getInfo(): string {
        return `
        ID:   ${this.id}
        Potencia HP: ${this.potenciaHp}
        Eficiencia:    ${this.getEfic(this.eficiencia)}
        Fabricante: ${this.fabricante}
        Descripcion: ${this.descripcion}
        Fecha Fabric: ${this.fechaFab}
        Fecha Instalacion: ${this.fechaInst}
        `;
      }}
//Declaro instancias para poner en practica funciones
const Motor1:Motor=new Motor("777984798249",150,Efic.A,"Motores S.A","Motor1",new Date("2020-05-03"),new Date("2023-03-09"))
const Motor2:Motor=new Motor("777984798250",160,Efic.B,"Motores S.A","Motor2",new Date("2020-05-04"),new Date("2023-03-10"))
const Motor3:Motor=new Motor("777984798251",170,Efic.C,"Motores S.A","Motor3",new Date("2020-05-05"),new Date("2023-03-11"))
//creo array para manipular datos y almacenarlos
const stockMotores:Motor[]=[]
//inserto las 3 intancias creadas
Motor1.agregar_equipo(Motor1,stockMotores)
Motor2.agregar_equipo(Motor2,stockMotores)
Motor3.agregar_equipo(Motor3,stockMotores)
//modifico nombre de Motor1
Motor1.editar_equipo("777984798249",stockMotores,"Motor1A")
//eliminamos Motor1
Motor1.eliminar_equipo("Motor1A",stockMotores)
//consultamos si se encuentra Motor1
Motor1.leer_equipo("Motor1A",stockMotores)
 //utilizo funcion get.Info para mostrar con estructura los datos
console.log(Motor1.getInfo())


/*-----------------------------------------------------------------------------------------------------*/

    /*public agregar_motor(motor: Motor, buscador: Motor[]){
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

    console.log(motorTwo.getInfo())*/