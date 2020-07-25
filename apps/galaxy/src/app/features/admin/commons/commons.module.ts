import { GlxInstructorHttpModule } from './../../../../../../../libs/galaxy-commons/src/lib/http/instructor/instructor.module';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ComponentsModule } from './components/components.module';
import { GlxWorkshopsHttpModule } from '@galaxy/commons/http';
import { HttpModule } from './http/http.module';
import {
  GlxLoadingModule,
  GlxInputFileModule,
} from '@galaxy/commons/components';
import { GlxErrorIterceptorModule } from '@galaxy/commons/interceptors';

@NgModule({
  exports: [
    MaterialModule,
    ComponentsModule,
    HttpModule,

    GlxWorkshopsHttpModule,
    GlxInstructorHttpModule,
    GlxLoadingModule,
    GlxErrorIterceptorModule,
    GlxInputFileModule,
  ],
})
export class AdminCommonsModule {}
