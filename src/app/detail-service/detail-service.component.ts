import { Component, OnInit } from '@angular/core';
import { FileService } from '../admin/services/file.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartServiceService } from '../cart-service.service';
import { SnapshotAction } from 'angularfire2/database';
import AOS from 'aos';

@Component({
  selector: 'app-detail-service',
  templateUrl: './detail-service.component.html',
  styleUrls: ['./detail-service.component.css']
})
export class DetailServiceComponent implements OnInit {
  serviceArray = [];
  service: SnapshotAction<any>;
  placeholder: string;
  testform: any;
  item;
  addBtn:Boolean;
  qty:number = 0;
  addMess;
  showMess:boolean;
 
  
  constructor(private file:FileService, private route:ActivatedRoute, private cartService:CartServiceService,  private router:Router) { 
    this.cartService.count.subscribe(catVal => {
      this.qty = catVal
    });
   
  }

  ngOnInit(): void {
    AOS.init();
    this.getSingleData();
   
    this.placeholder = "Add to cart";
    
  }


  // fetch data from service component
  getSingleData(){
     this.file.getService().subscribe(
      
      list => {
         this.serviceArray = list.map(item => {
         return {
               $key: item.key,
            ...item.payload.val()
          };
          });
          this.route.paramMap.subscribe(params => {
            this.service = list[+params.get("serviceId")];
            });
       });

      
  }
  
  addToCart(lola){
    this.addBtn = !this.addBtn;
    if(this.addBtn){
      this.cartService.addToCart(lola);
      this.placeholder = "Go to cart";
       this.qty = this.cartService.cartCount();
       this.cartService.count.next(this.qty);
    }
    if(!this.addBtn){
      this.router.navigate(['cartco'])
    }
    this.addMess = "Service Added to Cart";
    this.showMess = true;
    setTimeout(() => {
      this.showMess = false;
    }, 2000);
  }
}
