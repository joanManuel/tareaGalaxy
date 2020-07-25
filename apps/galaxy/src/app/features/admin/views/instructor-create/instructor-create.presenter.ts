import { GlxInstructorService } from '@galaxy/commons/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Instructor } from '@galaxy/commons/models';
import { IInstructorRequest } from '@galaxy/commons/interfaces';

@Injectable()
export class InstructorCreatePresenter {
  instructors: Instructor[] = [];
  constructor(
    private instructorsHttp: GlxInstructorService,
    private router: Router
  ) {}
  create(data: IInstructorRequest) {
    this.instructorsHttp.create(data).subscribe(
      (res) => this.goBack(),
      (err) => console.log()
    );
  }
  loadInstructors() {
    this.instructorsHttp
      .getAll()
      .subscribe((instructors) => (this.instructors = instructors));
  }
  goBack() {
    this.router.navigateByUrl('/admin/instructor');
  }
}
