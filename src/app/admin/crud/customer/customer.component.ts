import { Component, OnInit } from '@angular/core';
import { CotactService } from '../cotact.service';
import { AngularFireStorage} from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  uploadImg:string = "assets/images/upload.png";
  selectedImg:any = null;
   submitted:boolean;
   messageShow:boolean;
   formControls = this.customerService.form.controls;
  constructor(public customerService: CotactService, private store: AngularFireStorage) { }

  ngOnInit(): void {
  }
  
  showImage(event:any){
     if(event.target.files && event.target.files[0]){
        const reader = new FileReader();
        reader.onload = (e:any) => this.uploadImg = e.target.result;
         reader.readAsDataURL(event.target.files[0])
        this.selectedImg = event.target.files[0]
      }else{
        this.uploadImg = "assets/images/upload.png";
        this.selectedImg = null;
      }
  }

onSubmit(){
  this.submitted = true;
  if(this.customerService.form.valid){
   
    if(this.customerService.form.get('$key').value == null)
    this.customerService.inserData(this.customerService.form.value);
    
    else
    this.customerService.updateData(this.customerService.form.value);
    this.messageShow = true;
    setTimeout(() => 
      this.messageShow = false, 3000
    );
    this.submitted = false;
    this.customerService.form.reset();
  }

}
}
