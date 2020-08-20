import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { CartServiceService } from 'src/app/cart-service.service';

@Component({
  selector: 'app-coupan',
  templateUrl: './coupan.component.html',
  styleUrls: ['./coupan.component.css']
})
export class CoupanComponent implements OnInit {
 
   coupanGen:FormGroup;
   showMess;
   addMess:boolean;
   coupan;
  constructor(private formBuilder: FormBuilder, private cartService:CartServiceService) { 
     this.coupanGen = this.formBuilder.group({
       coupan:['']
     })
    }

  ngOnInit(): void {
  }

addCoupan(coupan){
     this.cartService.addCoupan(coupan);
    this.coupanGen.reset();
    this.showMess = "Coupan added";
    this.addMess = true; 
    setTimeout(() => {
      this.addMess = false;
    }, 2000);
}


}

