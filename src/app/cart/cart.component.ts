import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations'



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  
  
})
export class CartComponent implements OnInit {
  
 
   
 counter = 0;
  items;
  checkoutForm:FormGroup;
  total = 0;
  pprice : string;
  id;
 msg:string;
 counterr:number = 0;
 value = '';
 Retotal = 0;
 rereTotal;
 showadd:boolean;
 noti:string;

 
 
 constructor(private router: Router, private cartService: CartService, private formBuilder: FormBuilder){
   
      this.checkoutForm = this.formBuilder.group({
        name: ['', Validators.required],
        total: [''],
         items:[''],
         summery: ['', Validators.required]
       
   });
      
   this.cartService.counter.subscribe(catVal => {
     this.counter = catVal
   })
   this.cartService.reTotal.subscribe(catVal => {
    this.total = catVal
  })
  
  }


  
  
   ngOnInit(): void {
       
          this.items =  this.cartService.getItems(); 
           this.items.forEach(item => {
            this.total += (item.rupee * item.qty) 
         })
}

     

 
  clearCart(){
         this.items = this.cartService.clearCart();
         this.counter = this.cartService.clearCount();
         this.cartService.counter.next(this.counter)
 
}
    

  onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    this.counter = this.cartService.clearCount();
   
    this.cartService.addUserToFirebase(customerData);
    
    window.alert('Your Service has submitted we will contact you soon.');  
  }
  
clearItem(index){
  this.items.splice(index, 1).forEach(item => {
    this.total -= (item.rupee * item.qty);
    this.counter = this.cartService.removeCount();
    
})
this.cartService.counter.next(this.counter)
}




 onAdd(item){
     if(item.qty < 5){
        this.total += +item.rupee  
        item.qty++;
        this.noti = "You've changed"+'\xa0\xa0'+item.title+'\xa0\xa0' +"QUANTITY to"+'\xa0\xa0'+item.qty;
        this.showadd = true;
        setTimeout(() => {
          this.showadd = false;
      
        }, 2000);
       
        this.cartService.reTotal.next(this.total);  
     }else{
      this.showadd = true;
      this.noti = "You can add only maximum 5"+'\xa0\xa0'+item.title ;
      setTimeout(() => {
        this.showadd = false;
      
      }, 2000);
        
       
     }
  
 }
 onRemove(item){
     
   if(item.qty > 1){
        this.total -= item.rupee 
        item.qty--; 
        this.noti =  "You've changed"+'\xa0\xa0'+item.title+'\xa0\xa0'+"QUANTITY to"+'\xa0\xa0'+item.qty;
        this.showadd = true;
        setTimeout(() => {
          this.showadd = false;
        
        }, 2000);
        this.cartService.reTotal.next(this.total);  
       
     }else{
       
        this.noti = "You have reached minimum Quantity"+'\xa0\xa0'+item.qty+'\xa0\xa0'+"of"+'\xa0\xa0'+item.title ;
        this.showadd = true;
        setTimeout(() => {
          this.showadd = false;
        
        }, 2000);
}
     
     
 }
 }


 
 


