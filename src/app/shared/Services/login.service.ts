import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  checkLogin(): boolean {
    return !!localStorage.getItem('OrderDetails');
  }
}
