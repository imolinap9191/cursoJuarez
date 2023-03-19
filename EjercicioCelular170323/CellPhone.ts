import { SimCard } from "./SimCard";
import {Battery} from "./batery"
export class CellPhone{
    private make: string;
    private model: string;
    private simcard: SimCard[]
    private batery: Battery
public constructor(make:string,model:string,batery:Battery){
this.make=make;
this.model=model;
this.simcard=[];
this.batery=batery
}
    public getInfo():CellPhone {
        return this
    }

    public setSimCard (SIM:SimCard){
this.simcard.push(SIM)

    }

}
