import { Component, Input } from '@angular/core';
import { ItemCategory } from '../models/item-category';
import { BrandService } from '../services/brand.service';
import { Subscription } from 'rxjs';
import { Item } from '../models/item';
import { OrderItem } from '../models/order-item';
import { ItemService } from '../services/item.service';
import { ItemConfig } from '../models/item-config';
import { createItem } from '../shared/item-factory';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  categories: ItemCategory[] = [];
  apiItems: any;
  itemType: any;
  isModalOpen: boolean = false;
  private brandSubscription: Subscription | undefined;
  private itemSubscription: Subscription | undefined;
  receivedData!: OrderItem;
  orderItem!: OrderItem;
  addItemList: OrderItem[] = [];
  itemList: OrderItem[] = [];
  //List<OrderItem> addItemList = new List<OrderItem>();
  config: ItemConfig = {
    type: 'motorcycle',
  };


  items: Item[] = [
    {
      id: 1,
      name: "Item 1",
      description: "Description of Item 1",
      price: 20000000,
    },
    {
      id: 2,
      name: "Item 2",
      description: "Description of Item 2",
      price: 20000000,
    },
    {
      id: 3,
      name: "Item 3",
      description: "Description of Item 3",
      price: 20000000,
    },
    {
      id: 4,
      name: "Item 4",
      description: "Description of Item 4",
      price: 20000000,
    },
    {
      id: 5,
      name: "Item 5",
      description: "Description of Item 5",
      price: 20000000,
    },
    
    {
      id: 6,
      name: "Item 6",
      description: "Description of Item 6",
      price: 20000000,
    },
    {
      id: 7,
      name: "Item 7",
      description: "Description of Item 7",
      price: 20000000,
    },
    {
      id: 8,
      name: "Item 8",
      description: "Description of Item 8",
      price: 20000000
    },
    {
      id: 9,
      name: "Item 9",
      description: "Description of Item 9",
      price: 20000000
    },
    {
      id: 10,
      name: "Item 10",
      description: "Description of Item 10",
      price: 20000000
    },
    {
      id: 11,
      name: "Item 11",
      description: "Description of Item 11",
      price: 20000000
    },
  ];

  constructor(private brandService: BrandService,private itemService: ItemService) {
    this.items.forEach(item => {
        this.itemList.push({
          item: item,
          count: 0
        });
    });

    this.itemType = createItem(this.config);
    this.apiItems = [] as Array<typeof this.itemType>;
    console.log(typeof this.itemType);
    this.brandSubscription = this.brandService.getAllBrands().subscribe((data: ItemCategory[]) => {
      this.categories = data;
    });
  
    this.itemSubscription = this.itemService.getAllItems().subscribe((data: any) => {
      //console.log("before insert - "+JSON.stringify(data));
      this.apiItems = data;
      console.log("Getting data from api"+ JSON.stringify(this.apiItems) +"--");
    });
    
  }

  ngOnInit() {

  }
  
  
  
  receiveData(data: OrderItem) {
   // console.log("data in main component");
    if(!this.addItemList.includes(data)){
      this.addItemList.push(data);
    }else if(this.addItemList.includes(data) && data.count == 0){
      this.itemRemove(data);
    }
    this.addItemList = [...this.addItemList];
   // console.log(this.addItemList);
  }

  itemRemove(data:OrderItem){
    this.addItemList.map((i,index) => {
      if(i.item.id === data.item.id){
        i.count = i.count-1;
      }
    });
    this.addItemList = [...this.addItemList];
  }

  deleteFromOrderList(data:OrderItem){
    this.addItemList.map(i =>{
      if(i.item.id === data.item.id){
        i.count = 0;
      }
    });
    this.addItemList = [...this.addItemList];
  }

  checkOut(checkOutItems:OrderItem[]){
    this.isModalOpen = true;
    //console.log("main check out -"+checkOutItems.toString());
    this.itemService.CheckOutItems(checkOutItems).subscribe(
      (response: boolean) => {
        console.log("Response from server:", response);
      },
      (error) => {
        console.error("Error occurred:", error);
        // Handle errors if necessary
      }
    );
  }

  
  hideModal() {
    this.isModalOpen = false;
  }

  ngOnDestroy() {
    if (this.brandSubscription) {
      this.brandSubscription.unsubscribe();
    }
    if (this.itemSubscription) {
      this.itemSubscription.unsubscribe();
    }
  }

}

