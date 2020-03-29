import { CommonModule } from '@angular/common';
import { ConstantsService } from './services/constants.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { TechnologyComponent } from './components/technology/technology.component';

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  declarations: [TechnologyComponent],
  exports: [TechnologyComponent],
  providers: [ConstantsService]
})
export class SharedModule {}
