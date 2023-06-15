import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = "https://localhost:7199/api/Student/getStudents";

  constructor(private http:HttpClient) {}

  public getStudent() : Observable<Student[]> {
    return this.http.get<Student[]>(`${this.url}`);
  }

}
