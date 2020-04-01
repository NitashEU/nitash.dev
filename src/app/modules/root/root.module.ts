import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { Ng5SliderModule } from '../ng5-slider/slider.module';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { RootCardComponent } from './components/card/card.component';
import { RootCVComponent } from './pages/cv/cv.page';
import { RootHeaderComponent } from './components/header/header.component';
import { RootOverviewComponent } from './pages/overview/overview.page';
import { RootRootComponent } from './pages/root/root.page';
import { RootSectionComponent } from './components/section/section.component';
import { RootSortingVisualiserComponent } from './pages/sorting-visualiser/sorting-visualiser.page';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SortingVisualiserModule } from '../sorting-visualiser/sorting-visualiser.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    NgSelectModule,
    Ng5SliderModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule,
    SharedModule,

    SortingVisualiserModule
  ],
  declarations: [
    // Pages
    RootRootComponent,
    RootOverviewComponent,
    RootCVComponent,
    RootSortingVisualiserComponent,

    // Components
    RootCardComponent,
    RootHeaderComponent,
    RootSectionComponent
  ],
  exports: [],
  providers: []
})
export class RootModule {}
