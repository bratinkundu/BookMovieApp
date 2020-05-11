import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {GlobalVariables} from '../Common/global-variables'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  apiUrl : string = GlobalVariables.apiUrl
  constructor(private httpclient:HttpClient) { }


  getAllProducts():Observable<any>{
    return this.httpclient.get(this.apiUrl+'Products')
  }

  getItemById(id):Observable<any>
  {
    return this.httpclient.get(this.apiUrl+'Products'+'/'+id)
  }
}
