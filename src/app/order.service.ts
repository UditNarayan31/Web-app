import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable} from 'rxjs/observable'
import { Order } from 'src/app/models/order'
import { Iservice } from './services';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders;
  
  constructor(public afs: AngularFireDatabase) { 
   this.orders = this.afs.list('/orders').valueChanges().subscribe(item => {
    
   });
  
  }

  getOrder(){
   return this.orders
  }
}
