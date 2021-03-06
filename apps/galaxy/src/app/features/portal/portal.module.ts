import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { HomeView } from './views/home/home.view';
import { PortalCommonsModule } from './commons/commons.module';

@NgModule({
  declarations: [PortalComponent, HomeView],
  imports: [
    CommonModule,
    PortalRoutingModule,
    PortalCommonsModule
  ]
})
export class PortalModule { }
