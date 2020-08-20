import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
items = [];

  constructor(private angularFireDb:AngularFireDatabase, private store:AngularFirestore, private route:ActivatedRoute ) {
  
  }
    itemList:AngularFireList<any>;

    getService(){
      this.itemList = this.angularFireDb.list("products");
      return this.itemList.snapshotChanges();
    }

    

   inserService(services){
    this.itemList.push({
      qty:services.qty,
    caption: services.caption,
    imageUrl:services.imageUrl,
     card: services.card,
    desc: services.desc,
    admin: services.admin
    });
}


 updateService(services){
    this.itemList.update(services.$key,{
      qty:services.qty,
    caption: services.caption,
    imageUrl:services.imageUrl,
    card: services.card,
    desc: services.desc,
    admin: services.admin
    });
 }

 deleteService($key:string){
   this.itemList.remove($key);
 }
 

  
}
