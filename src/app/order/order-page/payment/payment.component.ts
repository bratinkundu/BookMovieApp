import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/shared/Services/payment.service';
import { CartService } from 'src/app/shared/Services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  otpform:FormGroup;
  show = false;
  errorflag = false;
  orderid;
  cartItems;
  constructor(public formbuilder:FormBuilder, private router: Router, private paymentservice:PaymentService, private cartservice:CartService) { }

  ngOnInit(): void {
    this.otpform = this.formbuilder.group({
      otp : ['',[Validators.required,Validators.maxLength(6),Validators.minLength(6)]]
    })
  }

  confirm(){
    if(this.otpform.controls.otp.value == '778899'){
      this.orderid = Math.floor(Math.random() * 1000000000)
      this.show = true

      this.cartservice.getItems().subscribe(
        data =>{
          this.cartItems = data
          console.log(this.cartItems)
          this.cartItems.forEach(element => {
            this.cartservice.removeFromCart(element.id).subscribe()
          });  
          });

          this.paymentservice.remove();
       setTimeout(()=>{
         this.router.navigate([''],) 
       },5000) 
    }
    else{
      this.errorflag = true
    }
  }

  cancel(){
    this.paymentservice.remove();
    this.router.navigate(['']);
  }

}
