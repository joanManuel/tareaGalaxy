import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlxErrorInterceptor } from './error.interceptor';

@NgModule({
  imports: [
    MatSnackBarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlxErrorInterceptor,
      multi: true
    }
  ]
})
export class GlxErrorIterceptorModule { }
