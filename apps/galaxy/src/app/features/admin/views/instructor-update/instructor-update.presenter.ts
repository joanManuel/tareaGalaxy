import { GlxInstructorService } from '@galaxy/commons/http';
import { Instructor } from '@galaxy/commons/models';
import { InstructorsHttp } from '../../commons/http/instructors.http';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { GlxLoadingComponent } from '@galaxy/commons/components';
import { forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { IInstructorRequest } from '@galaxy/commons/interfaces';

@Injectable()
export class InstructorUpdatePresenter {
  private instructorId: string;
  instructor: Instructor;
  instructors: Instructor[] = [];

  constructor(
    private instructorsHttp: InstructorsHttp,
    private instructorHttp: GlxInstructorService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {
    this.instructorId = this.activatedRoute.snapshot.paramMap.get(
      'instructorId'
    );
    console.log('J');
    console.log(this.instructorId);
  }

  load() {
    const loading = this.dialog.open(GlxLoadingComponent, {
      disableClose: true,
      closeOnNavigation: false,
    });
    forkJoin([
      this.instructorHttp.getOne(this.instructorId),
      this.instructorsHttp.getAll(),
    ])
      .pipe(finalize(() => loading.close()))
      .subscribe(([instructor, instructors]) => {
        this.instructor = instructor;
        this.instructors = instructors;
      });
  }
  update(data: IInstructorRequest) {
    this.instructorHttp.update(this.instructorId, data).subscribe(
      (res) => this.goBack(),
      (err) => console.log()
    );
  }
  goBack() {
    this.router.navigateByUrl('/admin/instructor');
  }
}
