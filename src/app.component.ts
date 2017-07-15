import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Killer App</h1>
    <breadcrumb></breadcrumb>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  constructor() {}
  
  ngOnInit() {}
}