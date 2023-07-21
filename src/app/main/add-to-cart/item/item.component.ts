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
  constructor(){
  }

  addToCart(item: Item){
    this.orderItem.count++;
    this.orderItem.item = item;
    this.dataEvent.emit(this.orderItem);
  }

  incrementCount(): void {
    this.orderItem.count++;
    this.dataEvent.emit(this.orderItem);
  }

  decrementCount(): void {
    if (this.orderItem.count > 0) {
      this.orderItem.count--;
      this.dataEvent.emit(this.orderItem);
    }
  }
}
