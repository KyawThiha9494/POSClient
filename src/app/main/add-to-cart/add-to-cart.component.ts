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
   items: Item[] = [
    {
      id: 1,
      name: "Item 1",
      description: "Description of Item 1",
      price: 20000000,
      selected: false,
    },
    {
      id: 2,
      name: "Item 2",
      description: "Description of Item 2",
      price: 20000000,
      selected: true,
    },
    {
      id: 3,
      name: "Item 3",
      description: "Description of Item 3",
      price: 20000000,
      selected: false,
    },
    {
      id: 4,
      name: "Item 4",
      description: "Description of Item 4",
      price: 20000000,
      selected: false,
    },
    {
      id: 5,
      name: "Item 5",
      description: "Description of Item 5",
      price: 20000000,
      selected: false,
    },
    
    {
      id: 6,
      name: "Item 6",
      description: "Description of Item 6",
      price: 20000000,
      selected: false,
    },
    {
      id: 7,
      name: "Item 7",
      description: "Description of Item 7",
      price: 20000000,
      selected: false,
    },
    {
      id: 8,
      name: "Item 8",
      description: "Description of Item 8",
      price: 20000000,
      selected: false,
    },
    {
      id: 9,
      name: "Item 9",
      description: "Description of Item 9",
      price: 20000000,
      selected: false,
    },
    {
      id: 10,
      name: "Item 10",
      description: "Description of Item 10",
      price: 20000000,
      selected: false,
    },
    {
      id: 11,
      name: "Item 11",
      description: "Description of Item 11",
      price: 20000000,
      selected: false,
    },
  ];

  receiveData(data: OrderItem) {
    this.receivedData = data;
    console.log("data in add-to-cart");
    this.sendToMain.emit(data);

  }
}
