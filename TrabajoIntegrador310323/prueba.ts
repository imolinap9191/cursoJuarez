const fs = require ('fs')
const readlineSync = require('readline-sync')
/*
let nroDeseado : number[]=new Array(5)
let nro: number, indice:number;
for (let index = 0; index < 5; index++) {
    nro=5 ------------------------aca iria readlinesync indicando la cantidad
    nroDeseado[index] = nro;
}
for (let index = 0; index < 5; index++) {
    console.log(`el numero en la posicion ${index} es ${nroDeseado[index]}` );      
}
*/
/*let dimensionArreglo: number = Number(prompt(`ingrese la dimension del arreglo:`)); //indica la dimension del arreglo//
let nombrePersona: string[]= new Array (dimensionArreglo);
let indice : number;
for (let indice = 0; indice < dimensionArreglo; indice++) {
    nombrePersona[indice] = prompt (`ingrese el nombre que quiere poner en el lugar ${indice}`);
}
for(indice=0;indice<dimensionArreglo;indice++){
    console.log(`la persona que ingreso en la posicion ${indice}es:${nombrePersona[indice]}`)
}*/
let arregloNombres:string[] =new Array(2);
let arregloNumeros:number[]=new Array(3);
let indice: number;
for(indice=0;indice <2; indice++){
    arregloNombres[indice]=prompt(`ingrese el nombre de la posicion ${indice}:`);
  }
  for(indice=0;indice <2; indice++){
    arregloNumeros[indice]=Number(prompt(`ingrese el nombre de la posicion ${indice}:`));
  }
  for(indice=0;indice <2; indice++){
      console.log(`El nombre en la posicion ${indice}es :${arregloNombres[indice]}`);
      ;
} for(indice=0;indice <3; indice++){
    console.log(`El numero en la posicion ${indice}es :${arregloNumeros[indice]});
    

 }
let dimensionArreglo : number=Number(readlineSync.question("indicar dimension"));
let arreglo:number[]=new Array(dimensionArreglo);
let indice:number;
let resultado:number=0;
for(indice=0;indice<dimensionArreglo;indice++){
    arreglo[indice]=Number(readlineSync.question(`indicque el nro que va en la posicion ${indice}:`));
    resultado +=arreglo[indice];
}
for(indice =0;indice <dimensionArreglo; indice++){
    console.log(`El numero en la posicion ${indice} es : ${arreglo[indice]}`);
}
console.log (`La suma del arreglo es: ${resultado}`);

