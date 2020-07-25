import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlxInputFileComponent } from './input-file.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [GlxInputFileComponent],
  exports: [GlxInputFileComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class GlxInputFileModule { }
