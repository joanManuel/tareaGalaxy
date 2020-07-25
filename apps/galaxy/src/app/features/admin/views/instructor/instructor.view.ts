import { Component, OnInit } from '@angular/core';
import { InstructorPresenter } from './instructor.presenter';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.view.html',
  styleUrls: ['./instructor.view.scss'],
  providers: [InstructorPresenter],
})
export class InstructorView implements OnInit {
  constructor(public presenter: InstructorPresenter) {}

  ngOnInit(): void {
    this.presenter.load();
  }
}
