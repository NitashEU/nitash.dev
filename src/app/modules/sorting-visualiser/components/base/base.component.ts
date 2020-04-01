import { BubbleSortService } from '../../services/bubble-sort.service';
import {
  Component,
  EventEmitter,
  OnInit,
  Output
  } from '@angular/core';
import { InsertionSortService } from '../../services/insertion-sort.service';
import { ISortingResult } from '../../interfaces/sorting-result.interface';
import { ISortService } from '../../services/sort.service';

@Component({
  selector: 'app-sorting-visualiser-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class SortingVisualiserBaseComponent implements OnInit {
  @Output()
  public sorted = new EventEmitter<void>();

  public values: number[];
  public size = 60;
  public speed = 30;
  public sorting: boolean;

  public sortingResult: ISortingResult = {};
  public valueWidth: string;

  public availableSortServices: ISortService[] = [
    this.bubbleSortService,
    this.insertionSortService
  ];

  private isSorted: boolean;

  public constructor(
    private bubbleSortService: BubbleSortService,
    private insertionSortService: InsertionSortService
  ) {}

  public ngOnInit(): void {
    this.generateArray();
  }

  public generateValueWidth(): void {
    this.valueWidth = `calc(${100 / this.size}% - 1px)`;
  }

  public generateArray(): void {
    if (this.sorting) {
      return;
    }

    const values: number[] = [];

    for (let i = 0; i < this.size; i++) {
      const randomFloat = Math.random() * this.size;
      const randomValue = Math.ceil(randomFloat);
      values.push(randomValue);
    }

    this.generateValueWidth();
    this.values = values;
    this.isSorted = false;
  }

  public async sort(sortService: ISortService): Promise<void> {
    if (this.sorting) {
      return;
    }

    if (this.isSorted) {
      this.generateArray();
    }

    this.sorting = true;

    const iter = sortService.run(this.values);
    let curr = iter.next();
    while (!curr.done) {
      this.sortingResult = curr.value;
      await this.delay(1000 / this.speed);
      curr = iter.next();
    }

    this.sortingResult = {
      green: {},
      red: {}
    };

    this.sorting = false;
    this.isSorted = true;
    this.sorted.emit();
  }

  private delay(ms: number): Promise<void> {
    return new Promise<void>(resolve => setTimeout(() => resolve(), ms));
  }
}
