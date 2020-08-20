import { Component, OnInit } from '@angular/core';
import { AdminAuthenticationService} from 'src/app/admin/services/admin-authentication.service'

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {
  image ='assets/images/online.png';

  constructor(public authService: AdminAuthenticationService) { }

  ngOnInit(): void {
   
  }

}
