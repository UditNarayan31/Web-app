import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit {
  checkoutForm:FormGroup;
  coupanForm:FormGroup
items;
remove;
increment;
grandTotal = 0;
alertMess;
coupanName;
discountPrice;
correct;
couponMess;
couponShow:boolean;
showMess:boolean;
showInc:boolean;
updated:boolean;
clicked = false;
  constructor(private cartService:CartServiceService, private formBuilder:FormBuilder, private route:Router) {
    this.cartService.count.subscribe(catVal => {
      this.remove = catVal
    });
    this.checkoutForm = this.formBuilder.group({
      email:['', Validators.required],
      require:['', Validators.required],
      total:[''],
      items:['']

    });
    this.coupanForm = this.formBuilder.group({
      coup:['']
    })
  }

  ngOnInit(){
    AOS.init();
    this.getCoupan();
   this.items = this.cartService.getData();
 
    this.items.forEach(item => {
    this.grandTotal += (item.admin * item.qty);   
  });

 
}

   deleteItem(item){
     this.items.splice(item,1).forEach(item => {
     this.grandTotal -= item.admin;
   });
   
   localStorage.setItem('cart-items', JSON.stringify(this.items));
   this.remove = this.cartService.removeToCart();
   this.cartService.count.next(this.remove);
   localStorage.setItem('inc', JSON.stringify(this.remove));

  }
 

incrementQty(item){
    if(item.qty < 5){
      this.grandTotal += +item.admin;
      this.increment = item.qty++;
      this.alertMess = "You've changed"+'\xa0\xa0'+item.caption+'\xa0\xa0' +"QUANTITY to"+'\xa0\xa0'+item.qty;
      this.showMess = true;
      this.updated = true;
      setTimeout(() => {
         this.showMess = false;
         this.updated =false;
}, 2000);
     
    
    
    }else{
       this.alertMess = "You can add only maximum 5"+'\xa0\xa0'+item.caption;
      this.showMess = true;
      setTimeout(()=>{
        this.showMess = false;
      },2000)
    }
  }

decrimentQty(item){
  if(item.qty > 1){
    this.grandTotal -= item.admin;
    this.increment = item.qty--;
    this.alertMess = "You've changed"+'\xa0\xa0'+item.caption+'\xa0\xa0' +"QUANTITY to"+'\xa0\xa0'+item.qty;
    this.showMess = true;
    this.updated = true;
    setTimeout(() => {
      this.showMess = false;
      this.updated =false;
    },2000)
  
}else{
    this.alertMess = "Minimum Quantity 1 Reached of"+'\xa0\xa0'+item.caption;
    this.showMess = true;
    setTimeout(() => {
      this.showMess = false;
    }, 2000)
  }
     
  }

  onSubmit(formData){
     this.cartService.addCheckoutform(formData);
     this.checkoutForm.reset();
          
     this.remove = this.cartService.removeTotal();
     this.cartService.count.next(this.remove);
     localStorage.setItem('inc', JSON.stringify(this.remove));
     document.getElementById("closeModalButton").click();
     this.items = this.cartService.clearCart();
     localStorage.setItem('cart-items', JSON.stringify(this.items));
     this.route.navigate(['check']);
    }

    getCoupan(){
      this.cartService.getCoupan().snapshotChanges().forEach(usersSnap => {
        this.coupanName = [];
        usersSnap.forEach(usersnap => {
          let order = usersnap.payload.toJSON();
          order['$key'] = usersnap.key;
          this.coupanName.push(order)
        })
     })
    }

    addCoupan(coupan){
      this.coupanName.forEach(item => {
        this.discountPrice = item.coupan;
     });
      if(this.discountPrice === coupan.coup){
          this.grandTotal =  this.grandTotal - (this.grandTotal / 10);
          this.couponMess = "Coupon applied successfully";
          this.couponShow = true;
          setTimeout(() => {
            this.couponShow = false;
          }, 4000);
      }else{
        this.couponMess = "Invalid Coupon";
        this.couponShow = true;
        setTimeout(() => {
          this.couponShow = false;
        }, 4000);
      }
 }
 
}
