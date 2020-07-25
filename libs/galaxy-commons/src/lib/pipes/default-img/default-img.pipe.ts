import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'glxDefaultImg'
})
export class GlxDefaultImgPipe implements PipeTransform {

  transform(value: string): string {
    return value ? value : 'assets/img-not-found.png';
  }

}
