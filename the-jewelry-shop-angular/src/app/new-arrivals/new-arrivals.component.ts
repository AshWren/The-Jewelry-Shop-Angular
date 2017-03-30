import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.scss'],
  template: `
    <app-header></app-header>
    
    <app-footer></app-footer>
  `
})
export class NewArrivalsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
