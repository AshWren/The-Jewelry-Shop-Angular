import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'gallery', component: GalleryComponent }
]

@NgModule({

   imports: [
       RouterModule.forRoot(appRoutes)
   ],
   exports: [
       RouterModule
   ]

})
export class AppRoutingModule { }