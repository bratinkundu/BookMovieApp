import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './authentication/sign-in/sign-in.component';


const routes: Routes = [
  
  {
    path: '',
    loadChildren: () => import('../app/catalog/catalog.module').then(m => m.CatalogModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
