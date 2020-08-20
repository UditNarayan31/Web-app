import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
      contact;
      contacts;
      details;
  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
     this.contact = this.getContact();
     this.contacts = this.getContacts();
     this.details = this.getDetails();
  }
   
  getContact(){
    return this.configService.getConfig().contact;
  }
  getContacts(){
    return this.configService.getConfig().contacts;
  }
  getDetails(){
    return this.configService.getConfig().details;
  }
}
