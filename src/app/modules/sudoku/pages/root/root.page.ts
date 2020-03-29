import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sudoku-root',
  templateUrl: './root.page.html',
  styleUrls: ['./root.page.scss']
})
export class SudokuRootComponent implements OnInit {
  public sudokuMatrix: number[] = Array(81).fill(0);

  public ngOnInit(): void {
    console.log(this.sudokuMatrix);
  }

  public getCellClass(index: number): any {
    const topBorder = index < 1 * 9;
    const rightBorder = (index - 8) % 9 === 0;
    const bottomBorder = index >= 8 * 9;
    const leftBorder = index % 9 === 0;
    return {
      cell: true,
      'top-thin': true && !topBorder,
      'right-thin': true && !rightBorder,
      'top-thick': (index < 4 * 9 && index + 1 > 3 * 9) || topBorder,
      'right-thick': (index - 2) % 9 === 0 || rightBorder,
      'bottom-thick': (index < 6 * 9 && index + 1 > 5 * 9) || bottomBorder,
      'left-thick': (index - 6) % 9 === 0 || leftBorder
    };
  }
}
