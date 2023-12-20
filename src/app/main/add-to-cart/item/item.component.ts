import { Component, Input ,EventEmitter, Output} from '@angular/core';
import { Item } from 'src/app/models/item';
import { OrderItem } from 'src/app/models/order-item';
@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  //@Input() item!: Item;
  @Output() dataEvent = new EventEmitter<OrderItem>();

  @Input() orderItem:OrderItem = new OrderItem;

  count : number = 0;
  constructor(){
  }

  ngOnInit() {
    console.log("Inside Item Components : "+ JSON.stringify(this.orderItem))
  }
  addToCart(item: Item){
    this.orderItem.count = 1;
    this.count = 1;
    this.orderItem.item = item;
    console.log("Order Item Count add to cart:"+this.orderItem.count);
    this.dataEvent.emit(this.orderItem);
  }

  incrementCount(): void {
    this.orderItem.count++;
    this.count++;
    console.log("Order Item Count incre:"+this.orderItem.count);
    this.dataEvent.emit(this.orderItem);
  }

  decrementCount(): void {
      this.orderItem.count--;
      this.count--;
      console.log("Order Item Count dec:"+this.orderItem.count);
      this.dataEvent.emit(this.orderItem);
  }
}
