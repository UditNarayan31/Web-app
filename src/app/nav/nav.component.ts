import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser, FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { CartServiceService } from '../cart-service.service';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
public user: any = SocialUser
items;
counter:number =0;
qty:number = 0;



  constructor( private socialAuthService: AuthService, private router: Router, private cartService: CartService, private cartServ: CartServiceService) {
    this.cartService.counter.subscribe(catVal => {
      this.counter = catVal
    })
    this.cartServ.count.subscribe(catVal => {
      this.qty = catVal
    })
    
    
   
  }
    
  ngOnInit(): void{
    this.counter = this.cartService.cartCount();
    this.qty = this.cartServ.getCount();
  }

  facebooklogin(){
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData) => {
     this.user = userData;
    });
  }

  googlelogin(){
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData) => {
     this.user = userData;
    });
  }
  
  signOut(): void {
    this.socialAuthService.signOut();
    window.location.reload();
  }
  
  

}
