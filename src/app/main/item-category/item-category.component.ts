import { Component, Input } from '@angular/core';
import { ItemCategory } from '../../models/item-category';

@Component({
  selector: 'item-category',
  templateUrl: './item-category.component.html',
  styleUrls: ['./item-category.component.css']
})
export class ItemCategoryComponent {
  @Input() category!: ItemCategory;


  constructor(){
  }
}
