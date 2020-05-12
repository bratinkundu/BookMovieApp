import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {GlobalVariables} from '../Common/global-variables';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  apiUrl : string = GlobalVariables.apiUrl
  constructor(private httpclient:HttpClient) { }

  addToCart(item) {
    return this.httpclient.post(this.apiUrl+"cart",item)
  }

  removeFromCart(id){
    return this.httpclient.delete(this.apiUrl+"cart/"+id)
  }

  editInCart(item){
    return this.httpclient.put(this.apiUrl+"cart/"+item.id,item)
  }

  getItems() {
    return this.httpclient.get(this.apiUrl+"cart")
  }

  getCartItem(id){
    return this.httpclient.get(this.apiUrl+"cart/"+id)
  }
}
