import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { SudokuRootComponent } from './pages/root/root.page';

@NgModule({
  imports: [BrowserModule, CommonModule, FlexLayoutModule],
  declarations: [SudokuRootComponent],
  exports: [],
  providers: []
})
export class SudokuModule {}
