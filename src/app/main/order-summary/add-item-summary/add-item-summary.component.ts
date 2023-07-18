import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/item';
import { OrderItem } from 'src/app/models/order-item';

@Component({
  selector: 'add-item-summary',
  templateUrl: './add-item-summary.component.html',
  styleUrls: ['./add-item-summary.component.css']
})
export class AddItemSummaryComponent {
  @Input() addItem!: OrderItem;

  @Output() removeItem = new EventEmitter<OrderItem>();
  onButtonClick(){

  }
  onDeleteItem(item:OrderItem){
    this.removeItem.emit(item);
  }
}
