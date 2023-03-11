export default class Bomba{
    private id:string;
    private caudalEntrada:number;
    private caudalSalida:number;
    private fabricante:string;
    constructor(id:string,caudalEntrada:number,caudalSalida:number,fabricante:string){
    this.id=id;
    this.caudalEntrada=caudalEntrada;
    this.caudalSalida=caudalSalida;
    this.fabricante=fabricante
    }
    public agregar_bomba(bomb: Bomba, buscador: Bomba[]){
        if(buscador.push(bomb)){
            console.log('Se ha añadido ', bomb.id, ' a la base de datos', buscador);
        } else{
            console.log('El Bomba', bomb.id, ' No se ha podido añadir a la base de datos');
            
        }
    }
    
    public leer_bomba(dispositivo: string, buscador: Bomba[]){
        let bombaEncontrada = buscador.find(b => b.id === dispositivo )
        if(bombaEncontrada){
            console.log(dispositivo, ' Existe en base de datos', bombaEncontrada)
            return bombaEncontrada
        } else{
            console.log(dispositivo, ' No existe en base de datos');
            
        }
    }
    
    public editar_bomba(dispositivo: string, buscador: Bomba[], dato: string){
        let bombaModificar = this.leer_bomba(dispositivo, buscador)
        if(bombaModificar){
            bombaModificar.id = dato;
            console.log('El dispositivo', dispositivo, ' Ha sido modificado y ahora se llama ', dato);
        }
        else {
            console.log('El dispositivo no se ha podido modificar');
            
        }
        
    }
    
    public eliminar_bomba(dispositivo: string, buscador: Bomba[]): any {
        let bombaEncontrado = buscador.findIndex(bomb2 => bomb2.id == dispositivo);
        if(bombaEncontrado >= 0){  
            buscador.splice(bombaEncontrado, 1)
            console.log('dispositivo eliminado', dispositivo);
            console.log(buscador);
            return buscador;
        } else {
         console.log('El dispositivo ', dispositivo, 'no ha sido eliminado');
        }
    }
    }
    