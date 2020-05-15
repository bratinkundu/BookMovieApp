import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { CheckoutGuard } from './shared/Guards/checkout.guard';
import { SummaryComponent } from '../app/order/order-page/summary/summary.component';



const routes: Routes = [
  
  {
    path: '',
    loadChildren: () => import('../app/catalog/catalog.module').then(m => m.CatalogModule)
  },
  {
    path:'order',
    loadChildren : ()=> import('../app/order/order.module').then(m=>m.OrderModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
