import { Injectable } from '@angular/core';
import { ISortingResult } from '../interfaces/sorting-result.interface';

@Injectable()
export class QuickSortService {
  public *run(values: number[]): IterableIterator<ISortingResult> {}
}
