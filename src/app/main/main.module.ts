import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ItemCategoryComponent } from './item-category/item-category.component';
import { BrandService } from '../services/brand.service';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ItemComponent } from './add-to-cart/item/item.component';
import { AddItemSummaryComponent } from './order-summary/add-item-summary/add-item-summary.component';


@NgModule({
  declarations: [
    MainComponent, 
    ItemCategoryComponent,
    AddToCartComponent,
    OrderSummaryComponent,
    ItemComponent,
    AddItemSummaryComponent
  ],
  providers: [BrandService],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
