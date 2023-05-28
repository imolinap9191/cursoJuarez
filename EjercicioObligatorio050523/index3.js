import {data} from "./index2.js"

const users=JSON.parse(data);
//PARA GENERAR UNA TABLA
const table= document.getElementById("table"); //identifico con id en el html

users.forEach((element) => {  //lo recorro y almaceno para que se genere.
const row= document.createElement("tr"); //crear el tag de fila
const cellName=document.createElement("td"); //crear el tag de celda p/nombre
cellName.textContent=element.name.first; 
row.appendChild(cellName);

const cellSurname=document.createElement("td"); //crear el tag de celda p/apellido
cellSurname.textContent=element.name.last; 
row.appendChild(cellSurname);

const cellStreetName=document.createElement("td"); //crear el tag de celda p/nombre de la calle
cellStreetName.textContent=element.location.street.name; 
row.appendChild(cellStreetName);

const cellStreetNum=document.createElement("td"); //crear el tag de celda p/nombre de la calle
cellStreetNum.textContent=element.location.street.number; 
row.appendChild(cellStreetNum);

const cellImage = document.createElement("td");
const image=document.createElement("img");
image.src =element.picture.thumbnail;
cellImage.appendChild(image);
row.appendChild(cellImage);

table.appendChild(row)
});