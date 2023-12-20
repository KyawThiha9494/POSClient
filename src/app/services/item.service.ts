import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment';
import { OrderItem } from '../models/order-item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url = environment.apiUrl+"ProductService";

  constructor(private http:HttpClient) {}

  public getAllItems() : Observable<any[]> {
    console.log(this.url);
    var temp = this.http.get<any[]>(`${this.url}/GetAllProducts`);
    return temp;
  }

  public CheckOutItems(orderItems: OrderItem[]): Observable<boolean> {
    console.log("Before call" + this.url);
    console.log("----------" + JSON.stringify(orderItems));
    return this.http.post<boolean>(`${this.url}/CheckOutItems`, orderItems);
  }


}
