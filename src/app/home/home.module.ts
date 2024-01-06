import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CoursesComponent } from './courses/courses.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CourseDetailsComponent } from './course-details/course-details.component';




@NgModule({
  declarations: [
    LandingpageComponent,
    LoginPageComponent,
    CoursesComponent,
    CourseDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MdbModalModule,
    HttpClientModule
  ],
  exports : [
    LandingpageComponent
  ]
})
export class HomeModule { }
