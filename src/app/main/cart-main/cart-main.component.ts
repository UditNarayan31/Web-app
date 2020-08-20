import { Component, OnInit } from '@angular/core';
import { MessangerService } from 'src/app/services/messanger.service';
import { Service } from 'src/app/models/service';
import { CartService } from 'src/app/services/cart.service';

import { Cart } from 'src/app/models/cart';


@Component({
  selector: 'app-cart-main',
  templateUrl: './cart-main.component.html',
  styleUrls: ['./cart-main.component.css']
})
export class CartMainComponent implements OnInit {
cartItem = [];
total = 0;
counter = 0;
  constructor(private msg: MessangerService, private cartService: CartService) { }

  ngOnInit(): void {
  this.handleSub();
  this.loadCart();
}

handleSub(){
this.msg.getMsg().subscribe((service:Service) => {
  this.loadCart();
})
}
loadCart(){
  this.cartService.getCart().subscribe((item: Cart[]) => {
  this.cartItem = item;
  this.calTotal();
  this.cartNumber();
 })
}
calTotal(){
  this.total = 0
  this.cartItem.forEach(item => {
    this.total += (item.qty * item.price)
  })
}
cartNumber(){
  this.counter = 0
  this.cartItem.forEach(item => {
    this.counter += (+item.qty)
    
  })
}
clearCart(){
  this.cartItem = [];
  return this.cartItem;
}


}


