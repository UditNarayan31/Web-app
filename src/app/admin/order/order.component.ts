import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/cart-service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
orderlist;
showBtn=-1;
showMore:string = "Get Order";
  constructor(private cartService:CartServiceService) { }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder(){
    this.cartService.getCheckoutform().snapshotChanges().forEach(usersSnap => {
       this.orderlist = [];
       usersSnap.forEach(usersnap => {
         let order = usersnap.payload.toJSON();
         order['$key'] = usersnap.key;
         this.orderlist.push(order)
       })
    })
  }

  toggle(index){
    this.showBtn = index;
   }

}
