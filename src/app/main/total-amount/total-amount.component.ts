import { ChangeDetectorRef, Component, Input, SimpleChanges } from '@angular/core';
import { OrderItem } from 'src/app/models/order-item';

@Component({
  selector: 'total-amount',
  templateUrl: './total-amount.component.html',
  styleUrls: ['./total-amount.component.css']
})
export class TotalAmountComponent {

  @Input() addedItems: OrderItem[] = [];

  totalAmount: number = 0;

  constructor(private cdr: ChangeDetectorRef) {}
  onCheckOut(){

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['addedItems'] && this.addedItems) {
      this.calculateTotalAmount();
    }
  }

  ngOnInit() {
    this.calculateTotalAmount();
  }

  private calculateTotalAmount() {
    console.log("On Change")
    this.totalAmount = 0;
    this.addedItems.forEach((element) => {
      if(element.count > 0){
        this.totalAmount += element.count * element.item.price;
      }
    });

    this.cdr.detectChanges();
  }
}
