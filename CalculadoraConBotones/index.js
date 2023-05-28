const resultado = document.getElementById ("resultado"); //capturo el display de la calculadora para mostrar lo que selecciono.
const botonesNumber = document.querySelectorAll(".number"); // capturo todos los numeros
const botonesFunction = document.querySelectorAll(".function"); // capturo todas las funciones
const botonIgual = document.getElementById("equal"); // capturo el "=" que me finaliza la operacion
//inicializo los operadores en 0.
let a = 0;
let b = 0;
let operacion = 0;
//coloco un escuchador de eventos para que me capture cada numero seleccionado, si es igual a 0, colocame el numero que presiono,
//sino concatenalos
botonesNumber.forEach((botonSelec) => {
  botonSelec.addEventListener("click", () => {
    const boton = botonSelec.innerHTML;
    if (resultado.innerHTML === "0") {
      resultado.innerHTML = boton;
    } else {
      resultado.innerHTML += boton;
    }
  });
});
//pongo un escuchador de eventos sobre cada boton de operación seleccionado
botonesFunction.forEach((botonFunct) => {
  botonFunct.addEventListener("click", () => {
    const boton = botonFunct.innerHTML;
    if (a === 0) {
      a = parseFloat(resultado.innerHTML);//devuelve, luego de verificar,un numero con coma flotante a partir del string dado en este caso
     resultado.innerHTML = 0;
    }
    operacion = boton;
  });
});
//declaro las funciones basicas + una general con cb llamada "calcular".
function calcular(a,b,cb){
  const resultadoFinal = cb(a,b);
  return resultadoFinal;
}
function sumar(a, b) {
  return a + b;
}
function restar(a, b) {
  return a - b;
}
function dividir(a, b) {
  return a / b;
}
function multiplicar(a, b) {
  return a * b;
}
//coloco un escuchador de eventos al "=" para cerrar la operacion seleccionada, si selecciono "+" funct.sumar,
//si es "-" funct restar, si es "x" funct multiplicar, si es "/" function dividir. 
botonIgual.addEventListener("click", () => {
  let resultadoFinal = 0;
  if (a !== 0 && operacion !== 0) {
    b = parseFloat(resultado.innerHTML);
    if (operacion === "+") {
      resultadoFinal = calcular(a, b, sumar);
    } else if (operacion === "-") {
      resultadoFinal = calcular(a, b, restar);
    } else if (operacion === "x") {
      resultadoFinal = calcular(a, b, multiplicar);
    } else if (operacion === "/") {
      resultadoFinal = calcular(a, b, dividir);
    }
  }
  resultado.innerHTML = resultadoFinal;
  a = 0;//logro que nuevamente vuelvan a 0 para volver a correr la funcion
  b = 0;//logro que nuevamente vuelvan a 0 para volver a correr la funcion
  operacion = 0;//logro que nuevamente vuelvan a 0 para volver a correr la funcion
});
