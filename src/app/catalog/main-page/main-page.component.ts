import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
   `,
  styles:[]
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
