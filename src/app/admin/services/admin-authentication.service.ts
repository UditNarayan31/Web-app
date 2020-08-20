import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { User } from 'src/app/model/user' 




@Injectable({
  providedIn: 'root'
})
export class AdminAuthenticationService  {
userData:any;
  constructor( public af: AngularFireAuth, public router:Router, public afs:AngularFirestore) {
     /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.af.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.email !== false) ? true : false;
  }

  SignOut() {
    return this.af.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/']);
    })
  }

   // Sign up with email/password
   SignUp(email, password) {
    return this.af.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert("You have been successfully registered!");
        console.log(result.user)
      }).catch((error) => {
        window.alert(error.message)
      })
  }

 
    // Sign in with email/password
    SignIn(email, password) {
      return this.af.auth.signInWithEmailAndPassword(email, password)
        .then((result) => {
           this.router.navigate(['admin']);
        }).catch((error) => {
          window.alert(error.message)
        })
    }
    SetUserData(user) {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
      const userData: User = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified
      }
      return userRef.set(userData, {
        merge: true
      })
    }
  
}
