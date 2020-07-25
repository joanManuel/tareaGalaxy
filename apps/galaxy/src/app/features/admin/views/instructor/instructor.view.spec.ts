import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorView } from './instructor.view';

describe('InstructorView', () => {
  let component: InstructorView;
  let fixture: ComponentFixture<InstructorView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
