import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-rotator',
  templateUrl: './hero-rotator.component.html',
  styleUrls: ['./hero-rotator.component.scss'], 
  template: `
    <div id="heroRotator" class="container hero rotator">
        <a href="#" class="prev"></a>
        <div class="rotator-wrapper slider">
            <ul>
                <li class="slide"><img class="sm-12" src="../../../../assets/images/Bracelets/drusy-bracelet.jpg" alt="hero"></li>
                <!--<li class="slide"><img class="sm-12" src="../../../../assets/images/Bracelets/drusy-bracelet-2.jpg" alt="hero"></li>
                <li class="slide"><img class="sm-12" src="../../../../assets/images/Bracelets/bracelet.jpg" alt="hero"></li> -->
            </ul>
        </div>
        <div class="wrapper page">
            <div class="container">
                <div class="pager"></div>
                <div class="prev"></div>
                <div class="next"></div>
            </div>
        </div>
        <a href="#" class="next"></a>
    </div>
  `
})
export class HeroRotatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
