import { read } from "fs";

const fs = require ('fs')
const readlineSync = require('readline-sync')
/*

//construya un algoritmo que tenga un arreglo de dimension 5 y llenelo con los numeros que el usuario desee; 
muestre los numeros del arreglo al usuario//

let nroDeseado : number[]=new Array(5)
let nro: number, indice:number;
for (let index = 0; index < 5; index++) {
    nro=5 ------------------------aca iria readlinesync indicando la cantidad
    nroDeseado[index] = nro;
}
for (let index = 0; index < 5; index++) {
    console.log(`el numero en la posicion ${index} es ${nroDeseado[index]}` );      
}
//----------------------------------------------------------------------------*/

//Construya un algoritmo que tenga un arreglo de dimension deseada por el usuario y 
//llenelo con los nombres que el usuario desee; Crear un arreglo de las posiciones que desee el usuario y llenarlo con nombres
//de personas
/*
let dimensionArreglo: number = Number(readlineSync.question(`ingrese la dimension del arreglo:`)); //indica la dimension del arreglo//
let nombrePersona: string[]= new Array (dimensionArreglo);
let indice : number;
for (let indice = 0; indice < dimensionArreglo; indice++) {
    nombrePersona[indice] = readlineSync.question (`ingrese el nombre que quiere poner en el lugar ${indice}`);
}
for(indice=0;indice<dimensionArreglo;indice++){
    console.log(`la persona que ingreso en la posicion ${indice}es:${nombrePersona[indice]}`)
}
//----------------------------------------------------------------------------//
*/
//Construya un algoritmo que tenga dos arreglos uno que almacene 
//2 nombres y otro que almacene 3 numeros ambos ingresados por el usuario
//Al final debe imprimir los valores por consola
/*let arregloNombres:string[] =new Array(2);
let arregloNumeros:number[]=new Array(3);
let indice: number;
for(indice=0;indice <2; indice++){
    arregloNombres[indice]=readlineSync.question(`ingrese el nombre de la posicion ${indice}:`);
  }
  for(indice=0;indice <3; indice++){
    arregloNumeros[indice]=Number(readlineSync.question(`ingrese el numero de la posicion ${indice}:`));
  }
  for(indice=0;indice <2; indice++){
      console.log(`El nombre en la posicion ${indice}es :${arregloNombres[indice]}`);
      ;
} for(indice=0;indice <3; indice++){
    console.log(`El numero en la posicion ${indice}es :${arregloNumeros[indice]}`);
    

 }
 //----------------------------------------------------------------------------*/


/*
//Construya un algoritmo que sume todos los elementos de un arreglo de tamaño N
//La dimension del arrelgo es ingresada por el usuariio
//Los elemnetos (numeros) del arreglo son ingresados por el usuario
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
*/
//----------------------------------------------------------------------------*/

//Sumar los elementos de cada una de las posiciones de dos vectores y guardar el resultado en otro vector
//el arreglo tiene dimension 6 y los numeros de los dos vectores los carga el usuario
/*let v1 : number[]=new Array (6);
let v2 : number[]=new Array (6);
let sumaV: number[]=new Array(6);
let indice:number;
for (let indice = 0; indice < 6; indice++) {
    v1[indice]=Number(readlineSync.question("ingrese el valor de v1[",indice,"] "));
}for (let indice = 0; indice < 6; indice++) {
    v2[indice]=Number(readlineSync.question("ingrese el valor de v2[",indice,"] "));
}for (let indice = 0; indice < 6; indice++) {
    sumaV[indice]=v1[indice] + v2[indice];
    console.log("vSuma[",indice,"]=",sumaV[indice]);
}
//------------------------------------------------------
*/

//Mismo caso que el anterior pero reutilizando codigo con una funcion
/*
function cargarVector(v:number[], cantidad:number){
    let indice:number;
    for (let indice = 0; indice < cantidad; indice++) {
        v[indice]=Number(readlineSync.question("ingrese el valor de la posicion",indice,":"));  
    }
}
function mostrarVector(v:number[],cantidad:number){
    let indice:number;
    for (let indice = 0; indice < cantidad; indice++) {
        console.log(v[indice],"");
     }
}
function sumarVector(v1:number[],v2:number[],vSuma:number[],cantidad:number){
    let indice:number;
    for (let indice = 0; indice < cantidad; indice++) {
        vSuma[indice]=v1[indice] +v2[indice];
     }
}
let v1:number[]=new Array(6)
let v2:number[]=new Array(6)
let vSuma:number[]=new Array(6)

console.log("cargando v1");
cargarVector(v1,6)
console.log("cargando v2");
cargarVector(v2,6)
sumarVector(v1,v2,vSuma,6);
console.log("valores de v1");
mostrarVector(v1,6)
console.log("valores de v2");
mostrarVector(v2,6)
console.log("valores de vSuma");
mostrarVector(vSuma,6)
*/