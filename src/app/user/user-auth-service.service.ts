import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class UserAuthServiceService {

  constructor(public afAuth: AngularFireAuth) {}
   signUp(email, password){
     return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((result) => {
       window.alert("Register Successfully");
     }).catch((error) => {
       window.alert(error.message);
     })
   }
}
