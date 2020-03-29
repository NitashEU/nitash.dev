import { NgModule } from '@angular/core';
import { rootRoute } from './modules/root/root-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { sudokuRoute } from './modules/sudoku/sudoku-routing.module';

const routes: Routes = [
  rootRoute,
  sudokuRoute,
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
