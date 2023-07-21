import { Component ,Input ,EventEmitter, Output} from '@angular/core';
import { Item } from 'src/app/models/item';
import { OrderItem } from 'src/app/models/order-item';

@Component({
  selector: 'add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent {
  receivedData!: OrderItem;
  @Output() sendToMain = new EventEmitter<OrderItem>();
   
  @Input() orderItems : OrderItem[] = [];

  receiveData(data: OrderItem) {
    this.receivedData = data;
    console.log("data in add-to-cart");
    this.sendToMain.emit(data);

  }
}
