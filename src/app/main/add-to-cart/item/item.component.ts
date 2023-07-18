import { Component, Input ,EventEmitter, Output} from '@angular/core';
import { Item } from 'src/app/models/item';
import { OrderItem } from 'src/app/models/order-item';
@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() item!: Item;
  @Output() dataEvent = new EventEmitter<OrderItem>();
  count: number = 0;
  orderItem:OrderItem = new OrderItem;
  constructor(){
  }

  addToCart(item: Item){
    this.count++;
    this.orderItem.item = item;
    this.orderItem.count = this.count;
    this.dataEvent.emit(this.orderItem);
  }

  incrementCount(): void {
    this.count++;
    this.orderItem.count = this.count;
    this.dataEvent.emit(this.orderItem);
  }

  decrementCount(): void {
    if (this.count > 0) {
      this.count--;
      this.orderItem.count = this.count;
      this.dataEvent.emit(this.orderItem);
    }
  }
}
