import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Service } from 'src/app/models/service';

@Component({
  selector: 'app-main-service',
  templateUrl: './main-service.component.html',
  styleUrls: ['./main-service.component.css']
})
export class MainServiceComponent implements OnInit {

  serviceList: Service[]
  serviceHead;
  constructor(private _service: ServiceService) { }

  ngOnInit(): void {
    this._service.getService().subscribe((service)=>{
      this.serviceList = service;
    })
    this.serviceHead = this._service.getMain()
   }

}
