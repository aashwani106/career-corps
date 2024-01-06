import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './home/landingpage/landingpage.component';
import { LoginPageComponent } from './home/login-page/login-page.component';
import { CoursesComponent } from './home/courses/courses.component';

const routes: Routes = [
  { 
    path : '',
    component : LandingpageComponent
  },
  { 
    path : 'a',
    component : LandingpageComponent
  },
  {
    
      path : 'login',
      component : LoginPageComponent
    
  },
  {
    path : 'courses',
    component : CoursesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
