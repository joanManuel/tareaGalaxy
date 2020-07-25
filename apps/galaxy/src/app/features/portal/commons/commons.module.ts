import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { FormsModule } from '@angular/forms';
import { GlxWorkshopsHttpModule } from '@galaxy/commons/http';

@NgModule({
  exports: [
    ComponentsModule,
    FormsModule,

    GlxWorkshopsHttpModule
  ]
})
export class PortalCommonsModule { }
