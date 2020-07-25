import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlxDefaultImgPipe } from './default-img.pipe';

@NgModule({
  declarations: [GlxDefaultImgPipe],
  exports: [GlxDefaultImgPipe],
  imports: [
    CommonModule
  ],
})
export class GlxDefaultImgModule { }
