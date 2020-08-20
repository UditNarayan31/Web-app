import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
item = [];
counter:number = 0;
removeCart: number = 0;
coupanGenr;
count = new Subject<any>();
remove = new Subject<any>();
getotal = new Subject<any>();

orderlist;
 constructor( private firebase: AngularFireDatabase) {
     this.orderlist = this.firebase.list("order");
     this.coupanGenr = this.firebase.list("coupan");
 }
 clearCart(){
  this.item = [];
  localStorage.setItem('cart-items', JSON.stringify(this.item));
 return this.item;
}

  addToCart(service){
   this.item.push(service)
   localStorage.setItem('cart-items', JSON.stringify(this.item));
   this.counter++ ;
   localStorage.setItem('inc', JSON.stringify(this.counter));
   }

removeToCart(){
  localStorage.setItem('inc', JSON.stringify(this.counter));
  return this.counter = this.counter - 1;
}
 
getData(){
   return this.item = JSON.parse(localStorage.getItem('cart-items'));
   
}
getCount(){
  return this.counter = JSON.parse(localStorage.getItem('inc'));
}

cartCount(){
  return this.counter;
}

addCheckoutform(service){
   this.orderlist.push(service);
}
getCheckoutform(){
  return this.orderlist;
}
removeTotal(){
  localStorage.setItem('inc', JSON.stringify(this.counter));
  return this.counter = 0;
}

// coupan firebase
  addCoupan(service){
    this.coupanGenr.push(service);
  } 

  getCoupan(){
    return this.coupanGenr;
  }
}
