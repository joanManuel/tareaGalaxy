import { InstructorUpdateView } from './views/instructor-update/instructor-update.view';
import { InstructorCreateView } from './views/instructor-create/instructor-create.view';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { WorkshopsView } from './views/workshops/workshops.view';
import { WorkshopCreateView } from './views/workshop-create/workshop-create.view';
import { WorkshopUpdateView } from './views/workshop-update/workshop-update.view';
import { InstructorView } from './views/instructor/instructor.view';

const routes: Routes = [
  { path: '', redirectTo: 'workshops', pathMatch: 'full' },
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'workshops', component: WorkshopsView },
      { path: 'workshops/create', component: WorkshopCreateView },
      { path: 'workshops/update/:workshopId', component: WorkshopUpdateView },
      { path: 'instructor', component: InstructorView },
      { path: 'instructor/create', component: InstructorCreateView },
      {
        path: 'instructor/update/:instructorId',
        component: InstructorUpdateView,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
