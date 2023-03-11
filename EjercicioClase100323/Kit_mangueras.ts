enum RoscaM {
    acero,bronce,aluminio,plastico
  }
export default class Kit_Mangueras{
    private id:string;
    private elementos:number;
    private medidaPulgadas:number;
    private roscasMaterial:RoscaM;
    constructor(id:string,elementos:number,medidaPulgadas:number,roscasMaterial:RoscaM){
    this.id=id;
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
        return material[roscasMaterial];
      }
      public getInfo(): string {
        return `
        ID:          ${this.id}
        Elementos: ${this.elementos}
        Material Rosca:  ${this.getRoscaM(this.roscasMaterial)}
        Medida en pulgadas: ${this.medidaPulgadas}
        `;
      }
    public agregar_kitM(kitM: Kit_Mangueras, buscador: Kit_Mangueras[]){
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
    