import { Component, OnInit } from '@angular/core';
import { CotactService } from '../cotact.service';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
customerArray = [];
  constructor(public customerService:CotactService) { }

  ngOnInit(): void {
    this.customerService.getCustomer().subscribe(
      list => {
       this.customerArray = list.map(item => {
         return {
           $key: item.key,
           ...item.payload.val()
         };
       }); 
      });
  }

  onDelete($key){
    if(confirm("are you sure want to remove")){
      this.customerService.deleteCustomer($key);
    }
  }

}
