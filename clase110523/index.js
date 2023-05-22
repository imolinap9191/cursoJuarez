//Ejercicio
//Crear las funciones Js para que a través de inputs se le premita ingresar al usuario :
//un titulo,una url de una imagen y un parrafo.
//Luego con esa info genere una tarjeta que cada vez que presiona un boton

//inputs
let titulo= document.querySelector(".titulo")
let url_imagen= document.querySelector(".url-imagen")
let texto= document.querySelector(".texto")// . para clases
let color= document.querySelector("#color") //# para id

//tarjeta
let tarjeta_titulo= document.querySelector(".tarjeta-titulo")
let tarjeta_imagen= document.querySelector(".tarjeta-imagen")
let tarjeta_texto= document.querySelector(".tarjeta-texto")

//almacenar id boton
let boton =document.querySelector("#ejecutar")

//escuchador del evento.. funcion anonima
boton.addEventListener("click", function() {
    tarjeta_titulo.innerText = titulo.value;//reproduce el texto con .innerText
    tarjeta_imagen.src =url_imagen.value;//reproduce la imagen con .src
    tarjeta_texto.innerText = texto.value;
    tarjeta.style.borderColor = color.value; //permite cambiar el color del borde del recuadro con cada click .style.borderColor
})
//cuando te paras dentro del input (barra para escribir) cambia el boton a color rojo
titulo.addEventListener("focus",function(){
    boton.style.color = "red"
}),
//cuando te paras fuera del input se cambia a color a azul
titulo.addEventListener("blur",function(){
    boton.style.color = "blue"
})


