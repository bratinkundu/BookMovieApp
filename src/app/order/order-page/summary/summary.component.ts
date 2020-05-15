import { Component, OnInit } from '@angular/core';
import { OrderDetails } from 'src/app/shared/Models/OrderDetails';
import { CartService } from 'src/app/shared/Services/cart.service';
import { PaymentService } from 'src/app/shared/Services/payment.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  cartItems;
  orderInfo : OrderDetails;
  constructor(private cartservice: CartService, private paymentservice:PaymentService, private router:Router) { }

  ngOnInit(): void {
    this.getOrderData();
    this.getCartItems();
  }

  getOrderData(){
    this.orderInfo = this.paymentservice.get();
    console.log(this.orderInfo)
  }

  getCartItems(){
    this.cartservice.getItems().subscribe(
      data =>{
        this.cartItems = data;
      }
    )
  }

  cancelorder(){
    this.paymentservice.remove();
    this.router.navigate(['/catalog/cart']);
  }
}
