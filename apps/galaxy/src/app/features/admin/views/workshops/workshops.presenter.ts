import { Injectable } from '@angular/core';
import { GlxWorkshopsHttp } from '@galaxy/commons/http';
import { Workshop } from '@galaxy/commons/models';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { GlxLoadingComponent } from '@galaxy/commons/components';

@Injectable()
export class WorkshopsPresenter {

  workshops: Workshop[] = [];

  constructor(
    private workshopsHttp: GlxWorkshopsHttp,
    private router: Router,
    private dialog: MatDialog
  ) {}

  load() {
    const loading = this.dialog.open(GlxLoadingComponent, { disableClose: true, closeOnNavigation: false });
    this.workshopsHttp.getAll()
    .pipe(
      finalize(() => loading.close())
    )
    .subscribe(workshops => {
      this.workshops = workshops;
    });
  }

  remove(workshopId: string) {
    console.log(workshopId);
  }

  goEditPage(workshopId: string) {
    this.router.navigate([ '/admin/workshops/update', workshopId ]);
  }

}
