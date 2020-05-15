import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../../shared/Services/item.service'
import { CartService } from 'src/app/shared/Services/cart.service';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  allProducts = []
  show = false;
  pageSize = 6;
  p = 1;
  constructor(public itemservice : ItemService, public cartservice:CartService) { }

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct(){
    this.itemservice.getAllProducts().subscribe(
      data =>{
        this.allProducts = data
        console.log(data)
      }
    )
  }

  addToCart(itemData){
    var doExist : boolean;
  this.cartservice.getItems().subscribe(
    data =>{
       doExist = this.hasItems(data,itemData);
       if(doExist){this.incrementQuantity(itemData);}
       else{this.addItemToCart(itemData)}
    }
  )
  }

   hasItems(data,itemData):boolean{
    var value : boolean = false;
    data.forEach(element => {
     
      if(element.id == itemData.id){
        value = true
      }
    });
    return value;
    
  }

  incrementQuantity(itemData)
  {
    this.cartservice.getCartItem(itemData.id).subscribe(
      data =>{
        data['CartQuantity'] = data['CartQuantity']+1;
        this.updateCart(data);
      }
    )
  }

  updateCart(data){
    this.cartservice.editInCart(data).subscribe(
      ()=>{
        this.show = true;
      }
    )
  }

  addItemToCart(itemData){
    itemData.CartQuantity = 1;
    this.cartservice.addToCart(itemData).subscribe(
        ()=>{
          this.show = true;
        },
        error =>{
         console.log('error!') //try for a toast
        }
     )
  }

}
