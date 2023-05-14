let i =10
function countDown (){
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
setTimeout(()=> countDown(),5000)