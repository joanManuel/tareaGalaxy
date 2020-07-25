import { Component, OnInit, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Instructor, Workshop } from '@galaxy/commons/models';
import { WorkshopFormData } from '@galaxy/commons/interfaces';

/*
@Injectable()
export class AsyncValidators {

  constructor(private http: HttpClient)

  documentValidor(control: FormControl) {

    return this.http.get<{ documentValidation: boolean }>(`https://myapi.com/document/validation?dni=${control.value}`);
  };

}
*/


@Component({
  selector: 'app-workshop-form',
  templateUrl: './workshop-form.component.html',
  styleUrls: ['./workshop-form.component.scss']
})
export class WorkshopFormComponent implements OnInit, OnChanges {
  @Output() save: EventEmitter<WorkshopFormData> = new EventEmitter<WorkshopFormData>();
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
  @Input() instructors: Instructor[] = [];
  @Input() workshop: Workshop;
  form: FormGroup;

  get date() {
    return this.form.get('date');
  }

  get dateError() {
    if (this.date.hasError('required')) {
      return 'Este campo es requerido';
    } else if (this.date.hasError('email')) {
      return 'Ingrese un email valido';
    } else if (this.date.hasError('asyncValidation')) {
      return 'La validacion asincrona no se cumple';
    }

    return null;
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      instructor: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      start: ['', Validators.required],
      startMeridiem: ['', Validators.required],
      end: ['', Validators.required],
      endMeridiem: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.workshop?.currentValue) {
      this.updateValues();
    }
  }

  updateValues() {
    this.form.patchValue({
      instructor: this.workshop.instructor.id,
      name: this.workshop.name,
      description: this.workshop.description,
      date: this.workshop.date,
      start: this.workshop.start,
      startMeridiem: this.workshop.startMeridiem,
      end: this.workshop.end,
      endMeridiem: this.workshop.endMeridiem,
    });
  }

  send() {
    if (this.form.invalid) { return; }
    this.save.emit(this.form.value);
  }

}
