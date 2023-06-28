import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ItemCategoryComponent } from './item-category/item-category.component';
import { BrandService } from '../services/brand.service';


@NgModule({
  declarations: [MainComponent, ItemCategoryComponent],
  providers: [BrandService],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
