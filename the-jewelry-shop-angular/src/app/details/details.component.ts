import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  template: `
    <app-header></app-header>


    <app-footer></app-footer>
  `
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

