import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations'


@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css'],
  animations:[
    trigger('fadeInOut', [
      state('initial', style({
        backgroundColor: 'white',
        width: '300px',
        
      })),
      state('final', style({
        backgroundColor: 'red',
         width: '300px',
        
        
      })),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms'))
    ]),
  ]
})
export class ServiceDetailComponent implements OnInit {
  services;
  items;
  addBtn:boolean = false;
  item;
  counter:number = 0;
  placeholder;
  messNot:string;
  currentState = "initial";
  counterr:number;
  showLoading = true;
 

 

  constructor( private configService: ConfigService, private route: ActivatedRoute, private cartService: CartService, private router: Router ) {
    this.cartService.counter.subscribe(catVal => {
      this.counter = catVal
    })
}

  ngOnInit(): void{
    this.placeholder = "Add to cart";
    this.services = this.getServices();
    this.route.paramMap.subscribe(params => {
      this.services = this.services[+params.get('productId')];
     
  });
  
}
    getServices(){
      return this.configService.getConfig().services;
}
    addToCart(services){

     
      this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
      this.addBtn = !this.addBtn
     
      if(this.addBtn){
        this.placeholder = "Go to Cart";
        this.cartService.addToCart(services);
     
        this.counter = this.cartService.cartCount();
        this.cartService.counter.next(this.counter)
     
              
      this.messNot = "Service Added to your cart"
      setTimeout(function(){
        document.getElementById('aap').className='waa';
    }, 1000);    

         
      }
      if(!this.addBtn){
        this.placeholder = "Go to Cart";
       this.router.navigate(['cart']);
       
      }

    }
   
      


}



