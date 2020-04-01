import { CommonModule } from '@angular/common';
import { CVBaseComponent } from './components/base/base.component';
import { CVSectionComponent } from './components/section/section.component';
import { CVTechnologyComponent } from './components/technology/technology.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  declarations: [CVBaseComponent, CVSectionComponent, CVTechnologyComponent],
  exports: [CVBaseComponent],
  providers: []
})
export class CVModule {}
