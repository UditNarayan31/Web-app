import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CotactService {

  constructor(private firebase:AngularFireDatabase) { }

  customerList:AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    imageUrl:new FormControl('', Validators.required),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    location: new FormControl('')
  });

  getCustomer(){
    this.customerList = this.firebase.list('customers');
    return this.customerList.snapshotChanges();
  }

  inserData(customer){
    this.customerList.push({
       
      fullName:customer.fullName,
      email:customer.email,
      mobile:customer.mobile,
      location:customer.location
    });
}
populateForm(item){
  this.form.setValue(item)
} 
updateData(customer){
  this.customerList.update(customer.$key,
    {
     
      fullName:customer.fullName,
      email:customer.email,
      mobile:customer.mobile,
      location:customer.location
  })
}

deleteCustomer($key:string){
    this.customerList.remove($key);
}
 }
