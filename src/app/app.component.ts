import { Component } from '@angular/core';
import { IStudent } from './student.module';
import { StudentService } from './student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student';

  public students: any = [] ;
  
  constructor(private _studentService: StudentService){}

  ngOnInit(){
      this._studentService.getStudents().subscribe(data => this.students = data);
    }  

}
