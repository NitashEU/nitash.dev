import { Component, Input } from '@angular/core';
import { Experience } from 'src/app/modules/interfaces/experience.interface';

@Component({
  selector: 'app-root-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class RootSectionComponent {
  @Input()
  public experience: Experience;
}
