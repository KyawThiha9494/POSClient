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

  constructor(private brandService: BrandService) {
    this.subscription = this.brandService.getAllBrands().subscribe((data: ItemCategory[]) => {
      this.categories = data;
    });
    console.log("catego"+this.categories);
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
        this.addItemList.splice(index,1);
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

