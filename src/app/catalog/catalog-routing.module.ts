import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ItemListComponent } from './main-page/item-list/item-list.component';
import { ItemDetailComponent } from './main-page/item-detail/item-detail.component';
import { CartComponent } from './main-page/cart/cart.component';
import { WishlistComponent } from './main-page/wishlist/wishlist.component';


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: '',
        component: ItemListComponent,
      },
      {
        path: 'details/:id',
        component: ItemDetailComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'wishlist',
        component: WishlistComponent
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
