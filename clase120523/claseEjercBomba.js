//Adaptar este codigo para que al activar la bomba haya una demora de 5 seg 
//y recien entonces comience la cuenta regresiva.

//codigo base con setInterval() que ejecuta codigo cada "n" segundos y clearInterval() limpia la variable seleccionada

function countDown (){
    let i =10
    const interval = setInterval(()=>{
        if(i === 0){
            clearInterval(interval)
            console.log("Pimba");
        }else{
            console.log( `la bomba hará Pimba en ${i} `)
            i--
        }
    },1000)
}
//introducir setTimeout() pasadole una funcion anonima + la funcion de arriba + milisegundos pedidos
setTimeout(()=> countDown(),5000)

//Primer uso de fetch()

fetch("https://api.chucknorris.io/jokes/random") //direccion de la api entre comillas
.then((data)=> data.json())  //entonces..
.then((joke) => console.log(joke.value)) //entonces..
.catch((error) => console.log(error)) //captura el error