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
          <li><a routerLink="gallery">Gallery</a></li>
          <li><a routerLink="new-arrivals">New Arrivals</a></li>
          <li><a routerLink="about-us">About Us</a></li>
        </ul>
      </nav>
      <input type="text" name="search" placeholder="Search...">
    </header>
  `
})
export class HeaderComponent /*implements OnInit */ {

  //constructor() { }

  //ngOnInit() {

  //}

}
