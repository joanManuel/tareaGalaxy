import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WorkshopsTableComponent } from './workshops-table/workshops-table.component';
import { WorkshopFormComponent } from './workshop-form/workshop-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InstructorTableComponent } from './instructor-table/instructor-table.component';
import { InstructorFormComponent } from './instructor-form/instructor-form.component';

const COMPONENTS = [
  MenuComponent,
  WorkshopsTableComponent,
  WorkshopFormComponent,
  InstructorTableComponent,
  InstructorFormComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [MaterialModule, CommonModule, RouterModule, ReactiveFormsModule],
})
export class ComponentsModule {}
