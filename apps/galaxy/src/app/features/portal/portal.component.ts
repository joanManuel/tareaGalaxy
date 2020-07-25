import { Component, OnInit } from '@angular/core';
import { GlxTheme } from '@galaxy/commons/services';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  constructor(public themeService: GlxTheme) { }

  ngOnInit(): void {
  }

}
