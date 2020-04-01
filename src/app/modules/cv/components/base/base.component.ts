import { Component, Input } from '@angular/core';
import { Experience } from 'src/app/modules/interfaces/experience.interface';

@Component({
  selector: 'app-cv-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class CVBaseComponent {
  @Input()
  public experiences: Experience[];
}
