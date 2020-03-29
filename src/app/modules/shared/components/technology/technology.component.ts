import { Component, Input } from '@angular/core';
import { ConstantsService } from '../../services/constants.service';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent {
  @Input()
  public technology: string;

  public constructor(
    public media: MediaObserver,
    public constants: ConstantsService
  ) {}
}
