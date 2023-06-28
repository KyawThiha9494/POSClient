import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemCategory } from '../models/item-category';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  url = "https://localhost:7175/api/ProductService/GetAllBrands";

  constructor(private http:HttpClient) {}

  public getAllBrands() : Observable<ItemCategory[]> {
    return this.http.get<ItemCategory[]>(`${this.url}`);
  }

}
