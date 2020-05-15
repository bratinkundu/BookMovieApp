import { Component, OnInit } from '@angular/core';
import { IpService } from 'src/app/shared/Services/ip.service';
import { HttpClient } from '@angular/common/http';
import { WishlistService } from 'src/app/shared/Services/wishlist.service';
import { ItemService } from 'src/app/shared/Services/item.service';
import { CartService } from 'src/app/shared/Services/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  IP;
  wishlist;
  itemdata:any[] = []
  pageSize = 6;
  p = 1;
  show = false
  constructor(private ipservice:IpService, private wishlistservice : WishlistService, private itemservice:ItemService, private cartservice:CartService) { }

  ngOnInit(): void {
    
    this.getAll()
  }



  getAll() {
    this.itemdata = []
    this.ipservice.getIP().subscribe(data => {
      this.IP = data;
      this.getWishList(this.IP.ip);
    });
  }
  getWishList(ip) {
    this.wishlistservice.getWishList(ip).subscribe(res => {
      this.wishlist = res;
       res.forEach(item => {
         this.itemdata = []
         this.itemservice.getItemById(item.productId).subscribe(res => {
           this.itemdata.push(res);
         });
         console.log(this.itemdata)
       });
    });
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

  deletefromWishlist(id){
    this.wishlistservice.deleteWishListItem(id).subscribe(
      ()=>{
        alert('Item removed from Wishlist')
        this.getAll();
      })
    }
}
