import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderPageComponent } from './order-page/order-page.component';
import { SummaryComponent } from './order-page/summary/summary.component';
import { PaymentComponent } from './order-page/payment/payment.component';


@NgModule({
  declarations: [OrderPageComponent, SummaryComponent, PaymentComponent],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
