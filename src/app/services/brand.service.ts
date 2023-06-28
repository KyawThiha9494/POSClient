import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemCategory } from '../models/item-category';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  url = environment.apiUrl+"ProductService/GetAllBrands";

  constructor(private http:HttpClient) {}

  public getAllBrands() : Observable<ItemCategory[]> {
    return this.http.get<ItemCategory[]>(`${this.url}`);
  }

}
