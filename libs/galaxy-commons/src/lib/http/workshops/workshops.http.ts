import { Injectable } from '@angular/core';
import { GlxWorkshopsHttpModule } from './workshops.module';
import { HttpClient } from '@angular/common/http';
import { environment } from 'apps/galaxy/src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Workshop } from '@galaxy/commons/models';
import { WorkshopResponse, WorkshopFormData } from '@galaxy/commons/interfaces';

@Injectable({
  providedIn: GlxWorkshopsHttpModule
})
export class GlxWorkshopsHttp {
  api = environment.api;

  constructor(private http: HttpClient) { }

  getAllPortal(): Observable<Workshop[]> {
    return this.http.get<WorkshopResponse[]>(`${this.api}/workshops/portal`)
    .pipe(
      map((originalResponse: WorkshopResponse[]) => {
        return originalResponse.map((item: WorkshopResponse) => new Workshop(item));
      })
    );
  }

  getAll(): Observable<Workshop[]> {
    return this.http.get<WorkshopResponse[]>(`${this.api}/workshops`)
    .pipe(
      map((originalResponse: WorkshopResponse[]) => {
        return originalResponse.map((item: WorkshopResponse) => new Workshop(item));
      })
    );
  }

  getOne(workshopId: string): Observable<Workshop> {
    return this.http.get<WorkshopResponse>(`${this.api}/workshops/${workshopId}`)
    .pipe(
      map((res: WorkshopResponse) => new Workshop(res))
    );
  }

  create(workshopFormData: WorkshopFormData) {
    return this.http.post(`${this.api}/workshops`, workshopFormData);
  }

  update(workshopId: string, workshopFormData: WorkshopFormData) {
    return this.http.put(`${this.api}/workshops/${workshopId}`, workshopFormData);
  }

}
