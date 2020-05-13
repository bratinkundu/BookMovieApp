import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../../shared/Services/item.service';
import { ActivatedRoute} from '@angular/router';
import { CartService } from 'src/app/shared/Services/cart.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  itemData;
  show = false;
  constructor(private route: ActivatedRoute,public itemservice : ItemService, public cartservice : CartService) { }

  ngOnInit(): void {
    this.getItemDetails();
  }

  getItemDetails(){
    this.route.paramMap.subscribe(params => {
      this.itemservice.getItemById(params.get('id')).subscribe(
        data =>{
          this.itemData = data
        }
      )
    });
  }

  addToCart(){
    var doExist : boolean;
  this.cartservice.getItems().subscribe(
    data =>{
       doExist = this.hasItems(data);
       if(doExist){this.incrementQuantity();}
       else{this.addItemToCart()}
    }
  )
  }

   hasItems(data):boolean{
    var value : boolean = false;
    data.forEach(element => {
     
      if(element.id == this.itemData.id){
        value = true
      }
    });
    return value;
    
  }

  incrementQuantity()
  {
    this.cartservice.getCartItem(this.itemData.id).subscribe(
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

  addItemToCart(){
    this.itemData.CartQuantity = 1;
    this.cartservice.addToCart(this.itemData).subscribe(
        ()=>{
          this.show = true;
        },
        error =>{
         console.log('error!') //try for a toast
        }
     )
  }
  
}
