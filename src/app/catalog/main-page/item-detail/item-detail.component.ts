import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../../shared/Services/item.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  itemData;
  constructor(private route: ActivatedRoute,public itemservice : ItemService) { }

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
  
}
