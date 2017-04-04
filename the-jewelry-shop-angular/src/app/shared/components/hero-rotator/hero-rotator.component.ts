import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ng2-bootstrap/carousel';

@Component({
  selector: 'app-hero-rotator',
  templateUrl: './hero-rotator.component.html',
  styleUrls: ['./hero-rotator.component.scss'], 
  template: `
     <carousel>
        <slide>
            <img src="../../../../assets/images/Bracelets/drusy-bracelet.jpg" alt="First Slide">\
        </slide>
        <slide>
            <img src="../../../../assets/images/Bracelets/drusy-bracelet-2.jpg" alt="Second Slide">
        </slide>
        <slide>
            <img src="../../../../assets/images/Bracelets/bracelet.jpg" alt="Third Slide">
        </slide>
            
       
    </carousel> 
  `, 
  providers: [{provide: CarouselConfig, useValue: {interval: 8000, noPause: true}}]
})
export class HeroRotatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
