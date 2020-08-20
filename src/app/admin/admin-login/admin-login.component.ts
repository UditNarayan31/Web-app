import { Component, OnInit } from '@angular/core';
import { AdminAuthenticationService } from '../services/admin-authentication.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(public authenticationService:AdminAuthenticationService) { }

  ngOnInit(): void {
  }

}
