import { Injectable } from '@angular/core';
import { GlxInstructorHttpModule } from './instructor.module';
import { environment } from 'apps/galaxy/src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Instructor } from '@galaxy/commons/models';
import { Observable } from 'rxjs';
import {
  InstructorResponse,
  IInstructorRequest,
} from '@galaxy/commons/interfaces';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: GlxInstructorHttpModule,
})
export class GlxInstructorService {
  api = environment.api;

  constructor(private http: HttpClient) {}
  getAll(): Observable<Instructor[]> {
    return this.http.get<InstructorResponse[]>(`${this.api}/instructors`).pipe(
      map((originalResponse: InstructorResponse[]) => {
        return originalResponse.map(
          (item: InstructorResponse) => new Instructor(item)
        );
      })
    );
  }
  getOne(workshopId: string): Observable<Instructor> {
    return this.http
      .get<InstructorResponse>(`${this.api}/instructors/${workshopId}`)
      .pipe(map((res: InstructorResponse) => new Instructor(res)));
  }
  create(instructorData: IInstructorRequest) {
    return this.http.post(`${this.api}/instructors`, instructorData);
  }
  update(instructorId: string, instructorUpdate: IInstructorRequest) {
    return this.http.put(
      `${this.api}/instructors/${instructorId}`,
      instructorUpdate
    );
  }
  delete(instructorId: string) {
    return this.http.delete(`${this.api}/instructors/${instructorId}`);
  }
}
