import { Instructor } from '@galaxy/commons/models';
import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  SimpleChanges,
  Input,
  OnChanges,
} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-instructor-form',
  templateUrl: './instructor-form.component.html',
  styleUrls: ['./instructor-form.component.scss'],
})
export class InstructorFormComponent implements OnInit, OnChanges {
  @Output() save: EventEmitter<object> = new EventEmitter<object>();
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
  @Input() instructor: Instructor;
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      mail: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  send() {
    if (this.form.invalid) {
      return;
    }
    this.save.emit(this.form.value);
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes?.instructor?.currentValue) {
      this.updateValues();
      console.log('ssdasd');
    }
  }

  updateValues() {
    this.form.patchValue({
      fullName: this.instructor.fullName,
      mail: this.instructor.mail,
    });
  }
}
