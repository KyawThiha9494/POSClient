import { Component } from '@angular/core';
import { ItemCategory } from '../models/item-category';
import { BrandService } from '../services/brand.service';
import { Subscription } from 'rxjs';
import { Item } from '../models/item';
import { OrderItem } from '../models/order-item';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  categories: ItemCategory[] = [];
  private subscription: Subscription | undefined;
  receivedData!: OrderItem;
  orderItem!: OrderItem;
  addItemList: OrderItem[] = [];
  //List<OrderItem> addItemList = new List<OrderItem>();


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


  constructor(private brandService: BrandService) {
    this.subscription = this.brandService.getAllBrands().subscribe((data: ItemCategory[]) => {
      this.categories = data;
    });
    console.log("catego"+this.categories);
    this.items.forEach(item => {
      this.items.forEach(item => {
        this.addItemList.push({
          item: item,
          count: 0
        });
      });
    });
  }

  receiveData(data: OrderItem) {
    console.log("data in main component");
    if(!this.addItemList.includes(data)){
      this.addItemList.push(data);
    }else if(data.count == 0){
      this.itemRemove(data);
    }
    console.log(this.addItemList);
  }

  itemRemove(data:OrderItem){
    this.addItemList.map((i,index) => {
      if(i.item.id === data.item.id){
        i.count = i.count-1;
      }
    });
  }

  deleteFromOrderList(data:OrderItem){
    this.addItemList.map(i =>{
      if(i.item.id === data.item.id){
        i.count = 0;
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

