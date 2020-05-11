import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ItemListComponent } from './MainPage/item-list/item-list.component';
import { ItemDetailComponent } from './MainPage/item-detail/item-detail.component';
import { WishlistComponent } from './MainPage/wishlist/wishlist.component';
import { CartComponent } from './main-page/cart/cart.component';


@NgModule({
  declarations: [NavbarComponent, FooterComponent, MainPageComponent, ItemListComponent, ItemDetailComponent, WishlistComponent, CartComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule
  ]
})
export class CatalogModule { }
