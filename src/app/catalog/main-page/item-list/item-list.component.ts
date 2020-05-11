import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../../shared/Services/item.service'


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  allProducts = []
  constructor(public itemservice : ItemService) { }

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

}
