import {SimCard} from "./SimCard"
import { CellPhone } from "./CellPhone"
import { Battery } from "./batery"
//debo declarar la instancia de bateria antes de generar la instancia del celular porque es parte de ella (composicion fuerte)
const batery01:Battery=new Battery(5,"motorola","Z8")
console.log(batery01.getInfo())
//creo nuevo telefono
const cell01 : CellPhone =new CellPhone("motorolla", "raste",batery01)
console.log(cell01.getInfo())
//creo la simCard (composicion debil)
const sim01:SimCard =new SimCard("movistar",52452184921)
console.log(sim01.getInfo())