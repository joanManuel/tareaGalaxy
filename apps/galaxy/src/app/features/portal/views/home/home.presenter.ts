import { Injectable } from '@angular/core';
import { GlxWorkshopsHttp } from '@galaxy/commons/http';
import { Workshop } from '@galaxy/commons/models';

@Injectable()
export class HomePresenter {
  workshops: Workshop[] = [];

  constructor(private workshopsHttp: GlxWorkshopsHttp) {
  }

  loadWorkshops() {
    this.workshopsHttp.getAllPortal()
    .subscribe(
      worshops => {
        this.workshops = worshops;
      });
  }

}
