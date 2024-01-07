import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { LoginPageComponent } from '../login-page/login-page.component';



@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent {
  constructor(public router: Router, private mdbModalService: MdbModalService) { }

  modalRef: MdbModalRef<LoginPageComponent> | null = null;

  async register() {
 
    this.modalRef = this.mdbModalService.open(LoginPageComponent, {
      data: {
        title: 'Modal title',
      },
      modalClass: 'modal-dialog-centered',
      // nonInvasive: true,
    })
    // this.router.navigate(['/login']);
  }
}
