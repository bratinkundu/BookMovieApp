import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {GlobalVariables} from '../Common/global-variables'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  apiUrl : string = GlobalVariables.apiUrl
  constructor(private httpclient:HttpClient) { }


  addToWishList(item): Observable<any> {
    return this.httpclient.post(`${this.apiUrl}WishList`, item);
  }

  getWishList(ip): Observable<any[]> {
    return this.httpclient.get<any>(`${this.apiUrl}WishList`).pipe(
      map(data => data.filter(item => item.ip === ip))
    );
  }

  deleteWishListItem(id: number){
    return this.httpclient.delete(`${this.apiUrl}WishList/${id}`);
  }

  getWishListSpecific(thisip: string, id: number): Observable<any> {
    return this.httpclient.get<any[]>(`${this.apiUrl}WishList`).pipe(
      map(data => data.filter(item => item.ip === thisip).filter(item => item.productId === id))
    );
  }
}
