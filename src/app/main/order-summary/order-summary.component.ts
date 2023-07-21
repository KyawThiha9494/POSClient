import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/item';
import { OrderItem } from 'src/app/models/order-item';

@Component({
  selector: 'order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent {

  @Input()
  addItemList!: OrderItem[];

  @Output() removeItem = new EventEmitter<OrderItem>();

  remove(item:OrderItem){
    this.removeItem.emit(item);
  }
}

