import { Component } from '@angular/core';
import { InnerAboutComponent } from '../inner-about/inner-about.component';
import { AboutImgComponent } from '../about-img/about-img.component';
import { VideoComponent } from '../video/video.component';
import { TeamComponent } from '../team/team.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [InnerAboutComponent, AboutImgComponent,VideoComponent, TeamComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
