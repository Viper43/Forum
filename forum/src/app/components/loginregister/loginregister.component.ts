import { Component, OnInit } from '@angular/core';
import { LoginRegisterService } from '../../services/login-register.service';

@Component({
  selector: 'app-loginregister',
  templateUrl: './loginregister.component.html',
  styleUrls: ['./loginregister.component.css']
})
export class LoginregisterComponent implements OnInit {
  apiLoginData: any;
  apiRegisterData: any;

  constructor(private loginRegister: LoginRegisterService) { }

  ngOnInit(): void {
    this.loginRegister.login().subscribe((data) => {
      //console.warn(this.apiData);
      this.apiLoginData=data
    });

    this.loginRegister.register().subscribe((data) => {
      //console.warn(this.apiData);
      this.apiRegisterData=data
    });
  }
}
