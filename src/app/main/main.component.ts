import { Component } from '@angular/core';
import { ItemCategory } from '../models/item-category';
import { BrandService } from '../services/brand.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  categories: ItemCategory[] = [];
  private subscription: Subscription | undefined;

  constructor(private brandService: BrandService) {
    this.subscription = this.brandService.getAllBrands().subscribe((data: ItemCategory[]) => {
      this.categories = data;
    });
    console.log("catego"+this.categories);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

