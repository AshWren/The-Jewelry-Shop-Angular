import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  template: `
    <input type="text" name="search" placeholder="Search...">
  `
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
