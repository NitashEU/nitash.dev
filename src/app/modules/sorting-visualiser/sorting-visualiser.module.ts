import { BubbleSortService } from './services/bubble-sort.service';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InsertionSortService } from './services/insertion-sort.service';
import { NgModule } from '@angular/core';
import { SortingVisualiserBaseComponent } from './components/base/base.component';

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  declarations: [SortingVisualiserBaseComponent],
  exports: [SortingVisualiserBaseComponent],
  providers: [BubbleSortService, InsertionSortService]
})
export class SortingVisualiserModule {}
