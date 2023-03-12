import Equipo from "./equipo";

export default class Bomba extends Equipo{
    private caudalEntrada:number;
    private caudalSalida:number;
    private fabricante:string;
    constructor(id:string,caudalEntrada:number,caudalSalida:number,fabricante:string,descripcion:string ,fechaFab:Date,fechaInst:Date){
        super(id,descripcion,fechaFab,fechaInst)
    this.id=id;
    this.caudalEntrada=caudalEntrada;
    this.caudalSalida=caudalSalida;
    this.fabricante=fabricante
    }}
    //Declaro instancias para poner en practica funciones
    const Bomba1:Bomba=new Bomba("667977666549",2,2,"Bombastic S.A","Bomba1",new Date("2020-05-03"),new Date("2023-03-09"))
    const Bomba2:Bomba=new Bomba("667977666550",2,2,"Bombastic S.A","Bomba2",new Date("2020-05-04"),new Date("2023-03-10"))
    const Bomba3:Bomba=new Bomba("667977666551",2,2,"Bombastic S.A","Bomba3",new Date("2020-05-05"),new Date("2023-03-11"))
    //creo array para manipular datos y almacenarlos
    const stockMangueras:Bomba[]=[]
    //inserto las 3 intancias creadas
    Bomba1.agregar_equipo(Bomba1,stockMangueras)
    Bomba2.agregar_equipo(Bomba2,stockMangueras)
    Bomba3.agregar_equipo(Bomba3,stockMangueras)
    //modifico nombre de Kit1
    Bomba1.editar_equipo("667977666549",stockMangueras,"Bomba1A")
    //eliminamos Bomba1
    Bomba1.eliminar_equipo("Bomba1A",stockMangueras)
    //consultamos si se encuentra Bomba1
    Bomba1.leer_equipo("Bomba1A",stockMangueras)

/*-----------------------------------------------------------------------------------------------------*/

   /*public agregar_bomba(bomb: Bomba, buscador: Bomba[]){
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
    */