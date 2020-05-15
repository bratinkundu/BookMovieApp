import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor(private httpclient : HttpClient) { }

  public getIP() {
    return this.httpclient.get('http://api.ipify.org/?format=json');
  }
}
