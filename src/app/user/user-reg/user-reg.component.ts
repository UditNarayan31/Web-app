import { Component, OnInit } from '@angular/core';
import { UserAuthServiceService } from '../user-auth-service.service';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {

  constructor(public authService:UserAuthServiceService) { }

  ngOnInit(): void {
  }

}
