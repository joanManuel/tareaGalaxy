import { Component, OnInit } from '@angular/core';
import { WorkshopsPresenter } from './workshops.presenter';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.view.html',
  styleUrls: ['./workshops.view.scss'],
  providers: [ WorkshopsPresenter ]
})
export class WorkshopsView implements OnInit {

  constructor(public presenter: WorkshopsPresenter) { }

  ngOnInit(): void {
    this.presenter.load();
  }

}
