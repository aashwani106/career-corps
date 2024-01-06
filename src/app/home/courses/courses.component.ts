import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  constructor(private router: Router) {}
  list: any = [
    { id: 1 ,courseName:'Web Development1' , courseCat : "IT"},
    { id: 2 ,courseName:'Web Development2' , courseCat : "IT"},
    { id: 3 ,courseName:'Web Development3' , courseCat : "IT"},
    { id: 4 ,courseName:'Web Development4' , courseCat : "IT"},
    { id: 5 ,courseName:'Web Development5' , courseCat : "IT"},
    { id: 6 ,courseName:'Web Development6' , courseCat : "IT"},
    { id: 7 ,courseName:'Web Development7' , courseCat : "IT"}
  ];


  

  async clicked(courseId: any) {
    // console.log('id', id)
    this.router.navigate(['/courseDetails', courseId]);
  }
}
