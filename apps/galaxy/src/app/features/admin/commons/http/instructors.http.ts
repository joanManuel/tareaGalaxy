import { Injectable } from '@angular/core';
import { HttpModule } from './http.module';
import { HttpClient } from '@angular/common/http';
import { environment } from 'apps/galaxy/src/environments/environment';
import { InstructorResponse } from '@galaxy/commons/interfaces';
import { map } from 'rxjs/operators';
import { Instructor } from '@galaxy/commons/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: HttpModule
})
export class InstructorsHttp {
  private api = environment.api;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Instructor[]> {
    return this.http.get<InstructorResponse[]>(`${this.api}/instructors`)
    .pipe(
      map((res) => res.map((item) => new Instructor(item)))
    );
    /*
      .pipe(
        map((instructorsResponse) => {
          return instructorsResponse.map((instructorResponse) => {
            return new Instructor(instructorResponse);
          });
        })
      );
      */
  }

}
