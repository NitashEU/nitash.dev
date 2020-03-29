import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { RootCVComponent } from './pages/cv/cv.page';
import { RootHeaderComponent } from './components/header/header.component';
import { RootRootComponent } from './pages/root/root.page';
import { RootSectionComponent } from './components/section/section.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    // Pages
    RootRootComponent,
    RootCVComponent,

    // Components
    RootHeaderComponent,
    RootSectionComponent
  ],
  exports: [],
  providers: []
})
export class RootModule {}
