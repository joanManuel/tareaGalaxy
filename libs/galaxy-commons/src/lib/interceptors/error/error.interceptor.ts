import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { statusErros, codeErros } from './error.constants';

@Injectable()
export class GlxErrorInterceptor implements HttpInterceptor {

  constructor(private snackBar: MatSnackBar) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
    .pipe(
      catchError((error: HttpErrorResponse) => {

        let message = statusErros.get(error.status) || 'Ocurrio un error inesperado';

        if (error.error?.codeError) {
          message = codeErros.get(error.status) || 'Ocurrio un error inesperado';
        }

        this.snackBar.open(message, undefined, {
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });

        return throwError(error);
      })
    );
  }
}
