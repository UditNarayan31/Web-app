import { Injectable } from '@angular/core';
import { AdminAuthenticationService } from '../admin/services/admin-authentication.service';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private auth:AuthService, private router:Router) { }

  canActivate() {
    if(this.auth.signIn) {
     return true;
    }
    this.router.navigate(['/'])
  }
}
