import { Component } from '@angular/core';
import { Student } from './models/student';
import { StudentService } from './services/student.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'POSClient';
  students: Student[] = [];

  constructor(private studentService: StudentService){
  }

  ngOnInit() : void{
    this.studentService
    .getStudent()
    .subscribe((result: Student[]) => (this.students = result));
    console.log(this.students);
  }
}
