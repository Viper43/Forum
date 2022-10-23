import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {
  loginUrl = "http://localhost:3080/loginregister/login";
  registerUrl = "http://localhost:3080/loginregister/register";

  constructor(private http: HttpClient) {}

  login() {

    return this.http.get(this.loginUrl);
  }

  register() {

    return this.http.get(this.registerUrl);
  }

}
