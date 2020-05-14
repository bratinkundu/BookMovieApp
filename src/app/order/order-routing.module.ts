import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderPageComponent } from './order-page/order-page.component';
import { SummaryComponent } from './order-page/summary/summary.component';
import { PaymentComponent } from './order-page/payment/payment.component';


const routes: Routes = [
  {
    path: '',
    component: OrderPageComponent,
    children: [
      {
        path: 'summary',
        component: SummaryComponent
      },
      {
        path: '',
        redirectTo: 'summary',
        pathMatch: 'full'
      },
      {
        path: 'payment',
        component: PaymentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
