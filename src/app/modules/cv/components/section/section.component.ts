import { Component, Input } from '@angular/core';
import { Experience } from 'src/app/modules/interfaces/experience.interface';

@Component({
  selector: 'app-cv-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class CVSectionComponent {
  @Input()
  public experience: Experience;
}
