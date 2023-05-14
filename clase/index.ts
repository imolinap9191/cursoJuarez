import Auto from "./Auto"
import Rueda from "./Rueda"
import AutoDeportivo from "./AutoDeportivo"
let ruedaPirelli:Rueda= new Rueda (14,"calle","carbono",40,"caucho","auto",35)
let fordFalcon= new Auto ("123abc","falcon","ford",ruedaPirelli);
console.log(fordFalcon)
fordFalcon.acelerar()
console.log(fordFalcon)
let ka= new Auto ("123abc","ka","ford",ruedaPirelli);

