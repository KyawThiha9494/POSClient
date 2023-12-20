import { Item } from "./item";
import { ItemCategory } from "./item-category";

export class Motorcycle implements Item{
    id: number=0;
    name: string="";
    description: string="";
    price: number=0;
    selected: boolean=false;
    Model:string=""; 
    Brand!: ItemCategory;
    Color:string = ""; 
    Year:number=0; 
    EngineType:string = ""; 
    EnginePower:string = ""; 
    FuelType:string = "";  
}