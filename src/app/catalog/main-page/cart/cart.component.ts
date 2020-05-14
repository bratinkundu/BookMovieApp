import { Component, OnInit } from '@angular/core';
import {CartService} from '../../../shared/Services/cart.service'
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { PaymentService } from 'src/app/shared/Services/payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  selectedValue = 1
  totalAmount = 0
  totalDiscount = 0
  cartItems;
  submitted =false;
  billingForm:FormGroup;

  constructor(public cartservice:CartService,private formBuilder: FormBuilder,private paymentservice: PaymentService, public router:Router) { }

   

  ngOnInit(): void {
    this.getCartItems()
    this.billingForm = this.formBuilder.group({
      firstname : ['',Validators.required],
      lastname : ['',Validators.required],
      email : ['',[Validators.required,Validators.email]],
      address : ['',Validators.required],
      upi : ['',Validators.required],
      city : ['',Validators.required],
      country : ['',Validators.required],
      zip : ['',Validators.required, Validators.minLength(6)],
    });
  }

  getCartItems(){
    this.cartservice.getItems().subscribe(
      data =>{
        this.cartItems = data
        this.calculateTotal()
      }
    )
  }

  removeItem(item){
    this.cartservice.removeFromCart(item.id).subscribe(
      data =>{
        this.getCartItems()
      }
    )
  }

  calculateTotal(){
    this.totalAmount = 0  
    for(let i in this.cartItems)
    {
      this.totalAmount += this.cartItems[i]['Amount']*this.cartItems[i]['CartQuantity']
    }
  }

  onSubmit(){
    
    console.log(this.billingForm.value);
    this.paymentservice.OrderInfo.name = this.billingForm.controls.firstname.value+' '+this.billingForm.controls.lastname.value
    this.paymentservice.OrderInfo.address = this.billingForm.controls.address.value;
    this.paymentservice.OrderInfo.email = this.billingForm.controls.email.value; 
    this.paymentservice.OrderInfo.amount = this.totalAmount;
    this.paymentservice.OrderInfo.city = this.billingForm.controls.city.value;
    this.paymentservice.OrderInfo.country = this.billingForm.controls.country.value;
    this.paymentservice.OrderInfo.upiId = this.billingForm.controls.upi.value;
    this.paymentservice.OrderInfo.zip = this.billingForm.controls.zip.value;
    console.log(this.paymentservice.OrderInfo);
    this.paymentservice.set(this.paymentservice.OrderInfo);
    // this.paymentservice.remove();
    this.router.navigate(['./order/summary']);
  }

  get f() { return this.billingForm.controls; }
}
