import { Injectable } from '@angular/core';
import { WorkshopFormData } from '@galaxy/commons/interfaces';
import { InstructorsHttp } from '../../commons/http/instructors.http';
import { GlxWorkshopsHttp } from '@galaxy/commons/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Instructor, Workshop } from '@galaxy/commons/models';
import { MatDialog } from '@angular/material/dialog';
import { GlxLoadingComponent } from '@galaxy/commons/components';
import { finalize } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Injectable()
export class WorkshopUpdatePresenter {
  private workshopId: string;
  workshop: Workshop;
  instructors: Instructor[] = [];

  constructor(
    private instructorsHttp: InstructorsHttp,
    private workshopsHttp: GlxWorkshopsHttp,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {
    this.workshopId = this.activatedRoute.snapshot.paramMap.get('workshopId');
  }

  load() {
    const loading = this.dialog.open(GlxLoadingComponent, { disableClose: true, closeOnNavigation: false });
    forkJoin([
      this.workshopsHttp.getOne(this.workshopId),
      this.instructorsHttp.getAll()
    ])
    .pipe(finalize(() => loading.close()))
    .subscribe(
      ([ workshop, instructors ]) => {
        this.workshop = workshop;
        this.instructors = instructors;
      }
    );
  }

  update(data: WorkshopFormData) {
    this.workshopsHttp.update(this.workshopId, data)
    .subscribe(
      res => this.goBack(),
      err => console.log(),
    );
  }

  goBack() {
    this.router.navigateByUrl('/admin/workshops');
  }
}
