import Equipo from "./equipo";

enum RoscaM {
    acero,bronce,aluminio,plastico
  }
export default class Kit_Mangueras extends Equipo{
    private elementos:number;
    private medidaPulgadas:number;
    private roscasMaterial:RoscaM;
    constructor(id:string,elementos:number,medidaPulgadas:number,roscasMaterial:RoscaM,descripcion:string ,fechaFab:Date,fechaInst:Date){
    super(id,descripcion,fechaFab,fechaInst)
    this.elementos=elementos;
    this.medidaPulgadas=medidaPulgadas;
    this.roscasMaterial=roscasMaterial
    }
    private getRoscaM(roscasMaterial: RoscaM): string {
        const material = {
          0: "acero",
          1: "bronce",
          2: "aluminio",
          3: "plastico",
        };
        return material[roscasMaterial] || "no se posee dicho material, intente nuevamente";
      }
      public getInfo(): string {
        return `
        ID:          ${this.id}
        Elementos: ${this.elementos}
        Material Rosca:  ${this.getRoscaM(this.roscasMaterial)}
        Medida en pulgadas: ${this.medidaPulgadas}
        Descripcion: ${this.descripcion}
        Fecha Fabric: ${this.fechaFab}
        Fecha Instalacion: ${this.fechaInst}
        `;
      }}
      //Declaro instancias para poner en practica funciones
      const Kit1:Kit_Mangueras=new Kit_Mangueras("75738449",2,1,RoscaM.acero,"Kit1",new Date("2020-05-03"),new Date("2023-03-09"))
      const Kit2:Kit_Mangueras=new Kit_Mangueras("75738450",2,1,RoscaM.plastico,"Kit2",new Date("2020-05-04"),new Date("2023-03-10"))
      const Kit3:Kit_Mangueras=new Kit_Mangueras("75738451",2,1,RoscaM.bronce,"Kit3",new Date("2020-05-05"),new Date("2023-03-11"))
      //creo array para manipular datos y almacenarlos
      const stockMangueras:Kit_Mangueras[]=[]
      //inserto las 3 intancias creadas
      Kit1.agregar_equipo(Kit1,stockMangueras)
      Kit2.agregar_equipo(Kit2,stockMangueras)
      Kit3.agregar_equipo(Kit3,stockMangueras)
      //modifico nombre de Kit1
      Kit1.editar_equipo("75738449",stockMangueras,"Kit1A")
      //eliminamos Kit1
      Kit1.eliminar_equipo("Kit1A",stockMangueras)
      //consultamos si se encuentra Kit1
      Kit1.leer_equipo("Kit1A",stockMangueras)
      //utilizo funcion get.Info para mostrar con estructura los datos
      console.log(Kit1.getInfo())

/*-----------------------------------------------------------------------------------------------------*/

    /*public agregar_kitM(kitM: Kit_Mangueras, buscador: Kit_Mangueras[]){
        if(buscador.push(kitM)){
            console.log('Se ha añadido ', kitM.id, ' a la base de datos', buscador);
        } else{
            console.log('El Kit', kitM.id, ' No se ha podido añadir a la base de datos');
            
        }
    }
    
    public leer_kitM(dispositivo: string, buscador: Kit_Mangueras[]){
        let kitMEncontrada = buscador.find(k => k.id === dispositivo )
        if(kitMEncontrada){
            console.log(dispositivo, ' Existe en base de datos', kitMEncontrada)
            return kitMEncontrada
        } else{
            console.log(dispositivo, ' No existe en base de datos');
            
        }
    }
    
    public editar_kitM(dispositivo: string, buscador: Kit_Mangueras[], dato: string){
        let kitM_Modificar = this.leer_kitM(dispositivo, buscador)
        if(kitM_Modificar){
            kitM_Modificar.id = dato;
            console.log('El dispositivo', dispositivo, ' Ha sido modificado y ahora se llama ', dato);
        }
        else {
            console.log('El dispositivo no se ha podido modificar');
            
        }
        
    }
    
    public eliminar_kitM(dispositivo: string, buscador: Kit_Mangueras[]): any {
        let kitM_Encontrado = buscador.findIndex(k2 => k2.id == dispositivo);
        if(kitM_Encontrado >= 0){  
            buscador.splice(kitM_Encontrado, 1)
            console.log('dispositivo eliminado', dispositivo);
            console.log(buscador);
            return buscador;
        } else {
         console.log('El dispositivo ', dispositivo, 'no ha sido eliminado');
        }
    }
    }
    */