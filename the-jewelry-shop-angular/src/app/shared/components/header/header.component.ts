import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  template: `
    <header class="container">
      <a class="logo" routerLink="/"><img src="../../../../assets/images/LogoforJewelryShop.png"></a>
      <nav>
        <ul>
          <li><a routerLink="/">Home</a></li>
          <li><a routerLink="/gallery">Gallery</a></li>
          <li><a routerLink="/new-arrivals">New Arrivals</a></li>
          <li><a routerLink="/about-us">About Us</a></li>
        </ul>
      </nav>
      <app-search-bar></app-search-bar>
    </header>
  `
})
export class HeaderComponent implements OnInit  {

  constructor() { }

  ngOnInit() {
    
  }

}
