import { ISortingResult } from '../interfaces/sorting-result.interface';

export interface ISortService {
  name: string;
  run(values: number[]): IterableIterator<ISortingResult>;
}
