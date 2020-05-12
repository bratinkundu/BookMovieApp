import { Component, OnInit } from '@angular/core';
import {CartService} from '../../../shared/Services/cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  selectedValue = 1
  totalAmount = 0
  totalDiscount = 0
  cartItems

  constructor(public cartservice:CartService) { }

  ngOnInit(): void {
    this.getCartItems()
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
    console
  }

}
