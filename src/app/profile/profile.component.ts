import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { CartService } from '../cart.service';
import AOS from 'aos';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
    profile;
    carousel;
    carousel1;
    carousel2;
  
  
    
  constructor(public configService : ConfigService, public cartService : CartService) { }

  ngOnInit(): void {
    AOS.init();
     this.profile = this.getProfile();
     this.carousel = this.getCarousel();
     this.carousel1 = this.getCarousel1();
     this.carousel2 = this.getCarousel2();
 }

  getProfile(){
    return this.configService.getConfig().profile;
  }
  getCarousel(){
    return this.configService.getConfig().carousel;
  }
  getCarousel1(){
    return this.configService.getConfig().carousel1;
  }
  getCarousel2(){
    return this.configService.getConfig().carouse2;
  }
  
}
