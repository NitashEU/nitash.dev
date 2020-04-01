import { NgModule } from '@angular/core';
import { rootRoute } from './modules/root/root-routing.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  rootRoute,
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
