import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { MazeGenerationVisualiserShareService } from '../../services/share.service';

@Component({
  selector: 'app-maze-generation-visualiser-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class MazeGenerationVisualiserCellComponent {
  public isWall: boolean;

  private isDragging = false;

  public constructor(private share: MazeGenerationVisualiserShareService) {}

  @HostListener('mousedown')
  public handleMouseDown(): void {
    this.share.isDragging = true;
    this.isWall = true;
  }

  @HostListener('mouseenter')
  public handleMouseEnter(): void {
    if (!this.share.isDragging) {
      return;
    }
    this.isWall = !this.isWall;
  }

  @HostListener('mouseup')
  public handleMouseUp(): void {
    this.share.isDragging = false;
  }
}
