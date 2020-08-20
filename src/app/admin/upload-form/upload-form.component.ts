import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { FileService } from '../services/file.service';
import { AngularFireStorage} from '@angular/fire/storage';
import { finalize } from 'rxjs/operators'
import { Route, Router } from '@angular/router';



@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {
  uploadImg:String = "assets/images/upload.png";
  selectedImg:any = null;
  isSubmit:Boolean = false;
   userList;
  serviceArray = [];
  showMessage:boolean;
  updateImg;
 
 
 

    formTemplate = new FormGroup({
    $key: new FormControl(null),
    qty: new FormControl(''),
    caption: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
    card: new FormControl(''),
    desc: new FormControl(''),
    admin: new FormControl('')
   });
   
  constructor(private fileService:FileService, private store: AngularFireStorage, private route:Router ) { }

  ngOnInit(): void {
    
  this.formTemplate.reset();
    this.fileService.getService().subscribe(
      list => {
         this.serviceArray = list.map(item => {
           return {
             $key: item.key,
             ...item.payload.val()
           };
         });
      });

      
      
  }
  
  showPreview(event:any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e:any) => this.uploadImg = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImg = event.target.files[0]
    }else{
      this.uploadImg = "assets/images/upload.png";
      this.selectedImg = null;

    }
  }
  
  onSubmit(formVal){
    this.isSubmit = true;
    if(this.formTemplate.valid){
      var filepath = `${formVal.caption}/${this.selectedImg.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.store.ref(filepath)
      this.store.upload(filepath, this.selectedImg).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formVal['imageUrl'] = url;
            this.fileService.inserService(formVal);
            console.log(formVal);
            this.formTemplate.reset();
           }) 
        })
      ).subscribe();
    }else{
     this.showMessage = true;
     setTimeout(() => 
       this.showMessage = false, 3000
     ); 
   
     this.fileService.updateService(formVal);
     this.formTemplate.reset();
           
   }
  }
  
  updateData(item){
    this.uploadImg = "assets/images/upload.png";
    this.selectedImg = null;
  this.formTemplate.setValue(item);
}

onDelete($key){
  if(confirm("are you sure want to remove")){
    this.fileService.deleteService($key);
  }
}

reload(){
  this.formTemplate.reset();
}

}
