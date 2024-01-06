import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  courseId: number | null = null;

  constructor(private route: ActivatedRoute, private router: Router) { }
  courseList: any = [
    { id: 1, courseName: 'Web Development1', courseCat: "IT" },
    { id: 2, courseName: 'Web Development2', courseCat: "IT" },
    { id: 3, courseName: 'Web Development3', courseCat: "IT" },
    { id: 4, courseName: 'Web Development4', courseCat: "IT" },
    { id: 5, courseName: 'Web Development5', courseCat: "IT" },
    { id: 6, courseName: 'Web Development6', courseCat: "IT" },
    { id: 7, courseName: 'Web Development7', courseCat: "IT" }
  ];

  chapterList: any = [
    { id: 1, chapName: 'Introduction to Wed Developing',
     chapDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 2, chapName: 'Introduction to Wed Developing',
     chapDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 3, chapName: 'Introduction to Wed Developing',
     chapDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 4, chapName: 'Introduction to Wed Developing',
     chapDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 5, chapName: 'Introduction to Wed Developing',
     chapDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 6, chapName: 'Introduction to Wed Developing',
     chapDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 7, chapName: 'Introduction to Wed Developing',
     chapDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }
  ];

  async ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.courseId = idParam ? +idParam : null;



    await this.getCourseData(this.courseId)
  }

  async landingpage() {
    this.router.navigate(['/home']);
  }

  course: any
  async getCourseData(courseId: any) {
    this.course = this.courseList.find((x: any) => x.id === courseId);
  }
}
