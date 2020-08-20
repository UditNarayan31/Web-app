import { Component, OnInit } from '@angular/core';
import { AdminAuthenticationService } from 'src/app/admin/services/admin-authentication.service';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {
alert:String;
  constructor(public authenticationService: AdminAuthenticationService) { }

  ngOnInit(): void {
  }
  SignUp(){
    this.alert = "Your Login Details has been Changed";
  }
}
