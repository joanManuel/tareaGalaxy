import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'glx-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GlxInputFileComponent),
      multi: true
    }
  ]
})
export class GlxInputFileComponent {
  value: File;
  isDisabled: boolean;
  onChange = (_: any) => {};
  onTouch = () => { };

  get name() {
    return this.value ? this.value.name : 'Ningun archivo seleccionado';
  }
  updateFile(event) {

    if (event.target.files.length) {
      // event.target.files[0];
      const [ file ] = event.target.files;
      this.onInput(file);
    }
  }

  onInput(value: File) {
    this.value = value;
    this.onTouch();
    this.onChange(this.value);
   }

   writeValue(value: File): void {
    this.value = value;
   }

   registerOnChange(fn: any): void {
    this.onChange = fn;
   }

   registerOnTouched(fn: any): void {
    this.onTouch = fn;
   }

   setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
   }

}
