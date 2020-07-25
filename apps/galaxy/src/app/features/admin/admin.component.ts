import { Component, OnInit } from '@angular/core';
import { MenuOption } from './commons/interfaces/menu-option.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  menuOptions: MenuOption[] = [
    { icon: 'folder', title: 'Talleres', url: '/admin/workshops' },
    { icon: 'folder', title: 'Instructores', url: '/admin/instructor' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
