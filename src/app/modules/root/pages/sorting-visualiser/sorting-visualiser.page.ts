import {
  Component,
  EventEmitter,
  OnInit,
  ViewChild
  } from '@angular/core';
import { ISortService } from 'src/app/modules/sorting-visualiser/services/sort.service';
import { Options } from 'src/app/modules/ng5-slider/options';
import { SortingVisualiserBaseComponent } from 'src/app/modules/sorting-visualiser/components/base/base.component';

@Component({
  selector: 'app-root-sorting-visualiser',
  templateUrl: './sorting-visualiser.page.html',
  styleUrls: ['./sorting-visualiser.page.scss']
})
export class RootSortingVisualiserComponent implements OnInit {
  @ViewChild(SortingVisualiserBaseComponent, { static: true })
  public sortingVisualiser: SortingVisualiserBaseComponent;

  public selectedSortService: ISortService;

  public speedSliderOptions = {
    floor: 1,
    ceil: 200,
    hidePointerLabels: true,
    hideLimitLabels: true,
    showSelectionBar: true
  };

  public sizeSliderOptions = {
    floor: 10,
    ceil: 200,
    hidePointerLabels: true,
    hideLimitLabels: true,
    showSelectionBar: true,
    disabled: false
  };

  public manualRefreshWithOptionsEventEmitter = new EventEmitter<Options>();

  public ngOnInit(): void {
    this.selectedSortService = this.sortingVisualiser.availableSortServices[0];
  }

  public sort(): void {
    this.sortingVisualiser.sort(
      this.selectedSortService ||
        this.sortingVisualiser.availableSortServices[0]
    );
    this.toggleSizeSliderOption(true);
  }

  public toggleSizeSliderOption(disabled: boolean) {
    this.sizeSliderOptions.disabled = disabled;
    this.manualRefreshWithOptionsEventEmitter.emit(this.sizeSliderOptions);
    console.log(disabled);
  }
}
