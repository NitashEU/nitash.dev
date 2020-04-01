import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class RootCardComponent {
  @Input()
  public showHeader = false;
  @Input()
  public title: string;
  @Input()
  public github: string;
}
