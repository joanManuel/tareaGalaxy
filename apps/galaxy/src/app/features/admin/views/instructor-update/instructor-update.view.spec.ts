import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorUpdateView } from './instructor-update.view';

describe('InstructorUpdateView', () => {
  let component: InstructorUpdateView;
  let fixture: ComponentFixture<InstructorUpdateView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorUpdateView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorUpdateView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
