import { Component } from '@angular/core';
import { SlidesComponent } from '../slides/slides.component';
import { RedesComponent } from '../redes/redes.component';
import { AboutComponent } from '../about/about.component';
import { MidSlidesComponent } from '../mid-slides/mid-slides.component';
import { MidDataComponent } from '../mid-data/mid-data.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SlidesComponent,
    RedesComponent,
    AboutComponent,
    MidSlidesComponent,
    MidDataComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
