import { Component, HostBinding } from '@angular/core';
import { GlxTheme } from '@galaxy/commons/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @HostBinding('class')
  get theme() {
    return this.themeService.theme;
  }

  constructor(private themeService: GlxTheme) {}

}
