import { Injectable } from '@angular/core';
import { GlxThemeModule } from './theme.module';
import { OverlayContainer } from '@angular/cdk/overlay';

@Injectable({
  providedIn: GlxThemeModule
})
export class GlxTheme {
  private dark: boolean;
  public theme: string;

  set isDark(value: boolean) {
    this.dark = value;
    this.dark ? this.setDarkTheme() : this.setLightTheme();
  }

  get isDark() {
    return this.dark;
  }

  constructor(private overlayContainer: OverlayContainer) {
    this.setLightTheme();
  }

  setLightTheme() {
    this.theme = 'light-theme';
    this.overlayContainer.getContainerElement().classList.add('light-theme');
    this.overlayContainer.getContainerElement().classList.remove('dark-theme');
  }

  setDarkTheme() {
    this.theme = 'dark-theme';
    this.overlayContainer.getContainerElement().classList.add('dark-theme');
    this.overlayContainer.getContainerElement().classList.remove('light-theme');
  }

}
