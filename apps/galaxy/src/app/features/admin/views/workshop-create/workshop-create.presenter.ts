import { Injectable } from '@angular/core';
import { InstructorsHttp } from '../../commons/http/instructors.http';
import { Instructor } from '@galaxy/commons/models';
import { GlxWorkshopsHttp } from '@galaxy/commons/http';
import { WorkshopFormData } from '@galaxy/commons/interfaces';
import { Router } from '@angular/router';

@Injectable()
export class WorkshopCreatePresenter {
  instructors: Instructor[] = [];

  constructor(
    private instructorsHttp: InstructorsHttp,
    private workshopsHttp: GlxWorkshopsHttp,
    private router: Router
  ) {
  }

  loadInstructors() {
    this.instructorsHttp.getAll()
    .subscribe(instructors => this.instructors = instructors);
  }

  create(data: WorkshopFormData) {
    this.workshopsHttp.create(data)
    .subscribe(
      res => this.goBack(),
      err => console.log(),
    );
  }

  goBack() {
    this.router.navigateByUrl('/admin/workshops');
  }


}
