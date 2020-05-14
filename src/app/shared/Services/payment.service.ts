import { Injectable } from '@angular/core';
import {OrderDetails} from '../Models/OrderDetails';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }

  public OrderInfo: OrderDetails = {
    id: null,
    name: '',
    email: '',
    address: '',
    city : '',
    country:'',
    zip:'',
    upiId: '',
    amount: 0,
  };


  PaymentData: OrderDetails;

  set(details: OrderDetails) {
    this.PaymentData = details;
    localStorage.setItem('OrderDetails', JSON.stringify(this.PaymentData));
  }

  get() {
    this.PaymentData = JSON.parse(localStorage.getItem('OrderDetails'));
    return this.PaymentData;
  }

  remove() {
    localStorage.removeItem('OrderDetails');
  }

}
