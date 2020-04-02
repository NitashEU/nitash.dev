import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CVModule } from '../cv/cv.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MazeGenerationVisualiserModule } from '../maze-generation-visualiser/maze-generation-visualiser.module';
import { Ng5SliderModule } from '../ng5-slider/slider.module';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { RootCardComponent } from './components/card/card.component';
import { RootCVComponent } from './pages/cv/cv.page';
import { RootHeaderComponent } from './components/header/header.component';
import { RootMazeGenerationVisualiserComponent } from './pages/maze-generation-visualiser/maze-generation-visualiser.component';
import { RootOverviewComponent } from './pages/overview/overview.page';
import { RootRootComponent } from './pages/root/root.page';
import { RootSortingVisualiserComponent } from './pages/sorting-visualiser/sorting-visualiser.page';
import { RouterModule } from '@angular/router';
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

    CVModule,
    SortingVisualiserModule,
    MazeGenerationVisualiserModule
  ],
  declarations: [
    // Pages
    RootRootComponent,
    RootOverviewComponent,
    RootCVComponent,
    RootSortingVisualiserComponent,
    RootMazeGenerationVisualiserComponent,

    // Components
    RootCardComponent,
    RootHeaderComponent
  ],
  exports: [],
  providers: []
})
export class RootModule {}
