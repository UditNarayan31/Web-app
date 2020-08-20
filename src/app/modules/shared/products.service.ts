import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{ Observable} from 'rxjs'
import { Service } from 'src/app/models/service';

const headerOption = {
  headers: new HttpHeaders({ 'content-type':'applicatin/json' })
}
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
productUrl='http://localhost:3000/products';
currentProduct: Service = {
  id: null,
  productId:null,
  qty:null,
  name: '',
  card: '',
  price: null,
  image: '',
  description:'' 
}
  constructor(private http: HttpClient) { 
    
  }

  getAllProduct():Observable<Service[]>{
    return this.http.get<Service[]>(this.productUrl, headerOption);
  }
  deleteProduct(id: number):Observable<Service>{
       return this.http.delete<Service>(this.productUrl + '/' + id, headerOption);
  }
  createProduct(item: Service):Observable<Service>{
    console.log(item)
    return this.http.post<Service>(this.productUrl, item, headerOption);
  }
}
