import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './home/landingpage/landingpage.component';
import { LoginPageComponent } from './home/login-page/login-page.component';
import { CoursesComponent } from './home/courses/courses.component';
import { CourseDetailsComponent } from './home/course-details/course-details.component';

const routes: Routes = [
  { 
    path : '',
    component : LandingpageComponent
  },
  { 
    path : 'home',
    component : LandingpageComponent
  },
  {
    
      path : 'login',
      component : LoginPageComponent
    
  },
  {
    path : 'courses',
    component : CoursesComponent
  },
  { path: 'courseDetails/:id', component: CourseDetailsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
