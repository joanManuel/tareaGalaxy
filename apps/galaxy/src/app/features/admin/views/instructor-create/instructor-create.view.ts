import { GlxInstructorService } from '@galaxy/commons/http';
import { Component, OnInit } from '@angular/core';
import { InstructorCreatePresenter } from './instructor-create.presenter';
import { Router } from '@angular/router';
import { IInstructorRequest } from '@galaxy/commons/interfaces';

@Component({
  selector: 'app-instructor-create',
  templateUrl: './instructor-create.view.html',
  styleUrls: ['./instructor-create.view.scss'],
  providers: [InstructorCreatePresenter],
})
export class InstructorCreateView implements OnInit {
  constructor(
    public presenter: InstructorCreatePresenter,
    private instructorHtpp: GlxInstructorService,
    private router: Router
  ) {}
  ngOnInit(): void {}
  create(data: IInstructorRequest) {
    this.instructorHtpp.create(data).subscribe(
      (res) => this.goBack(),
      (err) => console.log()
    );
  }
  goBack() {
    this.router.navigateByUrl('/admin/instructor');
  }
}
