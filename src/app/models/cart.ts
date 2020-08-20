import { Service } from './service';

export class Cart {
    id:number;
    productId:number;
    name:string;
    image:string;
    price:number;
    qty:number
constructor(id:number, service:Service, qty = 1){
    this.id = id;
    this.productId = service.id;
    this.name = service.name;
    this.image = service.image;
    this.price = service.price;
    this.qty = qty;

}
}
