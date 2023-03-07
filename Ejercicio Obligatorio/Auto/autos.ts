// Definir la clase Auto con sus variables internas y constructor 
export class Auto{
public brand:string;
public model:string;
public years:number;
public colour:string;
public origin:string;
public owner:string;
public patent:string;
constructor(brand:string,model:string,years:number,colour:string,origin:string,owner:string,patent:string){
    this.brand=brand;
    this.model=model;
    this.years=years;
    this.colour=colour;
    this.origin=origin;
    this.owner=owner;
    this.patent=patent;
}
}

// Implemente la clase RegistroAutomotor  que soporte funciones insertar/consultar/modificar/eliminar autos 
export class RegistroAutomotor{
    registroAutomotor(buscador:any){
        console.log('Autos: ', buscador);
    }
    insertar(automovil: Auto, buscador: Auto[]){
        if(buscador.push(automovil)){
            console.log('Se ha añadido ', automovil.patent, ' a la base de datos', buscador);
        } else{
            console.log('La patente', automovil.patent, ' No se ha podido añadir a al registro');
            
        }
    }

    consultar(automovil: string, buscador: Auto[]){
        let automovilEncontrado = buscador.find(car => car.patent === automovil )
        if(automovilEncontrado){
            console.log(automovil, ' Existe en registro', automovilEncontrado)
            return automovilEncontrado
        } else{
            console.log(automovil, ' No existe en registro');
            
        }
    }

    modificar(automovil: string, buscador: Auto[], dato: string){
        let autoModificar = this.consultar(automovil, buscador)
        if(autoModificar){
            autoModificar.patent = dato;
            console.log('El automovil', automovil, ' Ha sido modificado y ahora se llama ', dato);
        }
        else {
            console.log('El automovil no se ha podido modificar');
            
        }
        
    }

    eliminar(automovil: string, buscador: Auto[]): any {
        let automovilEncontrado = buscador.findIndex(carTwo => carTwo.patent == automovil);
        if(automovilEncontrado >= 0){  
            buscador.splice(automovilEncontrado, 1)
            console.log('automovil eliminado', automovil);
            console.log(buscador);
            return buscador;
        } else {

         console.log('El automovil ', automovil, 'no ha sido eliminado');
        }
    }
}


//Crear varios instancias de autos para simular registro automotor
const newCar =new Auto('Ford','Ka',2012,'Negro','Brasil','juanGarcia','LYO619');
const newCarTwo =new Auto('Chevrolet','Cruze',2014,'Blanco','EEUU','juanPerez','MNH807');
const newCarThree =new Auto('Toyota','Hilux 4x4',2015,'Blanca','Japon','juanLopez','OKO817');
const newCarFour =new Auto('Chevrolet','Celta',2012,'Rojo','Brasil','juanGonzalez','KWO986');
const newCarFive =new Auto('Toyota','Hilux 4x4',2013,'Arena','Japon','juanRodriguez','NVZ547');
const newCarsix =new Auto('Chevrolet','Onix',2016,'Gris','Argentina','juanVelez','AA437ON');
//Poblar el listado con autos
const listado= [newCar,newCarTwo,newCarThree,newCarFour,newCarFive,newCarsix]
//Crear nuevo registro de autos con las instancias creadas
const registro= new RegistroAutomotor
//cree una nueva instancia para agregar
const newCarSeven = new Auto('Ford', 'Focus',2021,'Gris','Brasil','juanFlores','AF315AA')
//funcion ejecutar en marcha
registro.insertar(newCarSeven,listado)
//funcion consultar en marcha
registro.consultar('LYO619',listado)
//funcion eliminar en marcha
registro.eliminar('LYO619',listado)
//funcion modificar en marcha
registro.modificar('LYO619',listado, 'LYO620')
//funcion de la totalidad en marcha
registro.registroAutomotor(listado)

//utilizar fs para incorporar datos desde un archivo JSON
import * as fs from "fs"
const carro:string[]=[]
const base=fs.readFileSync("./autos.json", "utf8");
const carros=JSON.parse(base)
for(let i=0; i<carros.length;i++){
    carro.push(carros[i])
}
//ver que sucede con una de las funciones creadas posterior a la incorporacion de los datos provenientes de JSON
registro.insertar(carros,listado)


