import { Injectable } from '@angular/core';
import { ISortingResult } from '../interfaces/sorting-result.interface';
import { ISortService } from './sort.service';

@Injectable()
export class InsertionSortService implements ISortService {
  public name = 'Insertion Sort';

  public *run(values: number[]): IterableIterator<ISortingResult> {
    for (let i = 1; i < values.length; i++) {
      const value = values[i];
      let j = i - 1;
      while (j >= 0 && values[j] > value) {
        yield {
          green: {
            [i]: true
          },
          red: {
            [j]: true
          }
        };
        yield {
          green: {
            [i]: true
          },
          red: {
            [j]: true,
            [j + 1]: true
          }
        };
        values[j + 1] = values[j];
        values[j] = value;
        yield {
          green: {
            [i]: true
          },
          red: {
            [j]: true,
            [j + 1]: true
          }
        };
        j -= 1;
      }
      values[j + 1] = value;
    }
  }
}
