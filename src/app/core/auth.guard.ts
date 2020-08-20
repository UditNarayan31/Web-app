import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AdminAuthenticationService} from 'src/app/admin/services/admin-authentication.service'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  email:any;
  password:any;
  constructor(public authService:AdminAuthenticationService, public router: Router ){ }

 canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authService.isLoggedIn !== true) {
      this.router.navigate(['/'])
    }
    return true;
  }   

}
