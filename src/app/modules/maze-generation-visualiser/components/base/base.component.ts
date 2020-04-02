import { Component } from '@angular/core';

@Component({
  selector: 'app-maze-generation-visualiser-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class MazeGenerationVisualiserBaseComponent {
  public rows = Array(25).fill(0);
  public columns = Array(25).fill(0);
}
