import { Injectable } from '@angular/core';
import { ServiceService } from './service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private mainService:ServiceService,private http:HttpClient) { }

  signUp(obj: any): Observable<any> {
    return this.http.post(this.mainService.apiurl + "/authentication/signup", obj)
  }
  login(obj:any):Observable<any> {
  return this.http.get(this.mainService.apiurl + "/authentication/login"+ JSON.stringify(obj))
  }

}
