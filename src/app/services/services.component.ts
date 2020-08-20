import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { FileService } from '../admin/services/file.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  service;
  serviceArray = [];


  
  constructor( public configService: ConfigService, private fileService: FileService, private rote:Router) {}

  ngOnInit(): void {
 
    this.service = this.getService();
  
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
  getService(){
    return this.configService.getConfig().service;
  }


 
  
 
 



 
   
}
