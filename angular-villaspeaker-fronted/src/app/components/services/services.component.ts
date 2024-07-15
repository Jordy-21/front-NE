import { Component } from '@angular/core';
import { FeaturesComponent } from '../features/features.component';
import { ServicesSectionComponent } from '../services-section/services-section.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FeaturesComponent, ServicesSectionComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
