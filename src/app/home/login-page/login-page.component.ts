import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { AuthServiceService } from '../services/auth-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(public modalRef: MdbModalRef<LoginPageComponent>, private authService: AuthServiceService) { }
  login_flag: boolean = false
  signup_flag: boolean = true
  $isLogin: boolean = false
  auth_obj: any = {}

  async register() {
    if (!(this.auth_obj['name'] || this.auth_obj['password'] || this.auth_obj['c_password'] || this.auth_obj['phone_no'] || this.auth_obj['email'])) {
      Swal.fire('Info!', 'Please Enter Details', 'info');
      return;
    }
    else {
      if (this.auth_obj['password'] != this.auth_obj['c_password']) {
        Swal.fire('Error!', 'Password & Confirm Password does not match!', 'error');
        return;
      }
      await this.authService.signUp(this.auth_obj).subscribe((resp) => {
        if (resp['error'] == false) {
          Swal.fire('Success', resp['data'], 'success');
        }else{
          Swal.fire('Error!', resp['data'], 'error');
        }
      });
    }
  }
  async login() {
    if (!(this.auth_obj['password'] ||  this.auth_obj['phone_no'])) {
      Swal.fire('Info!', 'Please Enter Details', 'info');
      return;
    }
    else {
      await this.authService.login(this.auth_obj).subscribe((resp) => {
        if (resp['error'] == false) {
          Swal.fire('Success', resp['data'], 'success');
        }else{
          Swal.fire('Error!', resp['data'], 'error');
        }
      });
    }

  }

  go_to_register(){
    this.login_flag = false;
    this.signup_flag = true;
  }

  go_to_login(){
    this.login_flag = true;
    this.signup_flag = false;
  }
}
