import { Injectable } from '@angular/core';
import { ISortingResult } from '../interfaces/sorting-result.interface';
import { ISortService } from './sort.service';

@Injectable()
export class BubbleSortService implements ISortService {
  public name = 'Bubble Sort';

  public *run(values: number[]): IterableIterator<ISortingResult> {
    const length = values.length;
    let swapped: boolean;

    do {
      swapped = false;

      yield {
        green: {},
        red: {},
        white: {
          [0]: true
        }
      };

      for (let i = 0; i < length; i++) {
        if (values[i] > values[i + 1]) {
          yield {
            green: {},
            red: {},
            white: {
              [i]: true
            }
          };

          yield {
            green: {},
            red: {},
            white: {
              [i]: true,
              [i + 1]: true
            }
          };

          const temp = values[i];
          values[i] = values[i + 1];
          values[i + 1] = temp;
          swapped = true;

          yield {
            green: {},
            red: {},
            white: {
              [i]: true,
              [i + 1]: true
            }
          };
        }

        if (!swapped) {
          yield {
            green: {},
            red: {},
            white: {
              [i + 1]: true
            }
          };
        }
      }
    } while (swapped);
  }
}
