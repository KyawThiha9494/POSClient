import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() item!: Item;

  
  constructor(){
  }

  addToCart(item: Item){

  }
}
