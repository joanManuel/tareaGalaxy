import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorCreateView } from './instructor-create.view';

describe('InstructorCreateView', () => {
  let component: InstructorCreateView;
  let fixture: ComponentFixture<InstructorCreateView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorCreateView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorCreateView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
