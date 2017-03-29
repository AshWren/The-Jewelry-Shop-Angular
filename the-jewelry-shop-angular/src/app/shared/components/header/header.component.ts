import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  template: `
    <header class="container">
      <a class="logo" routerLink="/"><img src="../../../../assets/images/Logo for Jewelry Shop.png"></a>
      <nav>
        <ul>
          <li><a routerLink="/">Home</a></li>
          <li><a routerLink="/">Home</a></li>
          <li><a routerLink="/">Home</a></li>
          <li><a routerLink="/">Home</a></li>
        </ul>
      </nav>

  `
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
