import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router'
import { LoginService } from '../Services/login.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutGuard implements CanActivateChild {

  constructor(private router:Router, private loginservice:LoginService){}

  canActivateChild(): boolean {
    if (this.loginservice.checkLogin()) {
      return true;
    }
    else {
      // this.router.navigate(['']);
      return false;
    }
  }
  
}
