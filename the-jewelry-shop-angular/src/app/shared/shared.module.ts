import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroRotatorComponent } from './components/hero-rotator/hero-rotator.component';
import { ItemRotatorComponent } from './components/item-rotator/item-rotator.component';
import { ThumbnailsComponent } from './components/thumbnails/thumbnails.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, FooterComponent, HeroRotatorComponent, ItemRotatorComponent, ThumbnailsComponent]
})
export class SharedModule { }
