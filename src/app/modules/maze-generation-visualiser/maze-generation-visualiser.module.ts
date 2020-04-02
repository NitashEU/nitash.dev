import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MazeGenerationVisualiserBaseComponent } from './components/base/base.component';
import { MazeGenerationVisualiserCellComponent } from './components/cell/cell.component';
import { MazeGenerationVisualiserShareService } from './services/share.service';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  declarations: [
    MazeGenerationVisualiserBaseComponent,
    MazeGenerationVisualiserCellComponent
  ],
  exports: [MazeGenerationVisualiserBaseComponent],
  providers: [MazeGenerationVisualiserShareService]
})
export class MazeGenerationVisualiserModule {}
