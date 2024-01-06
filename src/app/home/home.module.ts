import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CoursesComponent } from './courses/courses.component';



@NgModule({
  declarations: [
    LandingpageComponent,
    LoginPageComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    LandingpageComponent
  ]
})
export class HomeModule { }
