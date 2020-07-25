import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopItemComponent } from './workshop-item/workshop-item.component';
import { MaterialModule } from '../material/material.module';
import { GlxDefaultImgModule } from '@galaxy/commons/pipes';

const COMPONENTS = [
  WorkshopItemComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS, MaterialModule],
  imports: [
    CommonModule,
    MaterialModule,
    GlxDefaultImgModule
  ]
})
export class ComponentsModule { }
