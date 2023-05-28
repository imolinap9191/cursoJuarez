
import {data} from "./index2.js"

const users=JSON.parse(data);
//PARA GENERAR UNA LISTA
const list= document.querySelector("ul");
users.forEach((el) => {
   const usr= `
   <li>${el.name.first} ${el.name.last} / ${el.location.street.name} ${el.location.street.number} /<img src= ${el.picture.thumbnail}> </li> 
   `;
   list.innerHTML += usr;
});


