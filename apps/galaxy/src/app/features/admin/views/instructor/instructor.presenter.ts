import { Injectable } from '@angular/core';
import { Instructor } from '@galaxy/commons/models';
import { Router } from '@angular/router';
import { InstructorsHttp } from '../../commons/http/instructors.http';
import { GlxInstructorService } from '@galaxy/commons/http';
import { GlxLoadingComponent } from '@galaxy/commons/components';
import { MatDialog } from '@angular/material/dialog';
import { finalize } from 'rxjs/operators';

@Injectable()
export class InstructorPresenter {
  instructor: Instructor[] = [];

  constructor(
    private instructorHttp: GlxInstructorService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  load() {
    const loading = this.dialog.open(GlxLoadingComponent, {
      disableClose: true,
      closeOnNavigation: false,
    });
    this.instructorHttp
      .getAll()
      .pipe(finalize(() => loading.close()))
      .subscribe((instructor) => (this.instructor = instructor));
  }
  remove(instructorId: string) {
    this.instructorHttp.delete(instructorId).subscribe((resp) => this.load());
  }
  goEditPage(instructorId: string) {
    this.router.navigate(['/admin/instructor/update', instructorId]);
  }
}
