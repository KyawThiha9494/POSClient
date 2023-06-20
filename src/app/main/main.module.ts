import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ItemCategoryComponent } from './item-category/item-category.component';


@NgModule({
  declarations: [MainComponent, ItemCategoryComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
