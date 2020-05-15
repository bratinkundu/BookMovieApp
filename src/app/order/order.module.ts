import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 
import { OrderRoutingModule } from './order-routing.module';
import { OrderPageComponent } from './order-page/order-page.component';
import { SummaryComponent } from './order-page/summary/summary.component';
import { PaymentComponent } from './order-page/payment/payment.component';


@NgModule({
  declarations: [OrderPageComponent, SummaryComponent, PaymentComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class OrderModule { }
