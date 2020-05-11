import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItemService} from '../shared/Services/item.service';
import { CatalogRoutingModule } from './catalog-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CartComponent } from './main-page/cart/cart.component';
import {ItemDetailComponent} from './main-page/item-detail/item-detail.component';
import {ItemListComponent} from './main-page/item-list/item-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [NavbarComponent, FooterComponent, MainPageComponent, CartComponent,ItemDetailComponent,ItemListComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    NgbModule
  ],
  providers: [
    ItemService
  ]
})
export class CatalogModule { }
