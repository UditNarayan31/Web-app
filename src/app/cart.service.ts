import { Injectable } from '@angular/core';
import { Iservice } from './services';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subject } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class CartService {
   counter = new Subject<any>();
   reTotal = new Subject<any>();
  
 reCount:number = 0;
 items = [];
  userList;
  count: number=0

  
 
constructor( private firebase: AngularFireDatabase, private http: HttpClient) { 

this.userList = this.firebase.list("orders");

}

ngOnInit(){
  
}
  addToCart(services){

      let productExists = false
      for(let i in this.items){
        if(this.items[i].productId === services.id){
          this.items[i].qty++
          productExists = true
          break;
        }
      }
      if(!productExists){
        this.items.push({
          productId: services.id,
          image: services.image,
          title:services.title,
          rupee:services.rupee,
          qty: 1

        })
        this.count += (+services.qty)
      
        
       
     }
    }

  

     getItems(){
     
       return this.items;
    
}

    cartCount(){
      return this.count;
      
    }
    removeCount(){
      this.count -= 1 
      return this.count;
     
    }
   

   
  clearCount(){
    this.count = 0
    return this.count;
  }
   
   
    clearCart(){
    this.items = [];
   return this.items;
  
}


// firebase crud
getUserFromFirebase(){
  return this.userList;
}

addUserToFirebase(services: Iservice){
  this.userList.push(services);
}

updateUserOnFirebase(services: Iservice){
  let $key = services.$key;
   this.userList.update($key, services);
}

deleteUserFromFirebase($key: string){
   this.userList.remove($key);
}
}


