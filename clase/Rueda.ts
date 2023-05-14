
export default class Rueda{
    public tamaño:number;
    public tipo:string;
    public material:string;
    public presionMaxima:number;
    public presionDeAire:number;
    public materialCubierta:string;
    public tipoDePico:string;
    constructor(tamaño:number,tipo:string, material:string,presionMaxima:number,materialCubierta:string,tipoDePico:string,presionDeAire:number){
        this.presionDeAire=presionDeAire;
        this.tamaño=tamaño;
        this.tipo=tipo;
        this.material=material;
        this.presionMaxima=40;
        this.materialCubierta=materialCubierta;
        this.tipoDePico=tipoDePico;
    }
    inflar(){
        
    }
}