import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootModule } from './modules/root/root.module';
import { SudokuModule } from './modules/sudoku/sudoku.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RootModule, SudokuModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
