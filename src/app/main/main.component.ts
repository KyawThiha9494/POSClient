import { Component } from '@angular/core';
import { ItemCategory } from '../models/item-category';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  categories: ItemCategory[] = [
    {
      name: 'itemCategory 1',
      description: 'Description of itemCategory 1',
    },
    {
      name: 'itemCategory 2',
      description: 'Description of itemCategory 2',
    },
    // Add more itemCategory objects as needed
  ];


 
}
