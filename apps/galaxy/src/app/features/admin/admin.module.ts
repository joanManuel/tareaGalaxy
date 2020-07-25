import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminCommonsModule } from './commons/commons.module';
import { WorkshopsView } from './views/workshops/workshops.view';
import { WorkshopUpdateView } from './views/workshop-update/workshop-update.view';
import { WorkshopCreateView } from './views/workshop-create/workshop-create.view';
import { InstructorView } from './views/instructor/instructor.view';
import { InstructorCreateView } from './views/instructor-create/instructor-create.view';
import { InstructorUpdateView } from './views/instructor-update/instructor-update.view';

@NgModule({
  declarations: [
    AdminComponent,
    WorkshopsView,
    WorkshopCreateView,
    WorkshopUpdateView,
    InstructorView,
    InstructorCreateView,
    InstructorUpdateView
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminCommonsModule
  ]
})
export class AdminModule { }
