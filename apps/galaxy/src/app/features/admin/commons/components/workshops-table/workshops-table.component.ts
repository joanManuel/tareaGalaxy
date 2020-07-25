import { Component, Input, ViewChild, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Workshop } from '@galaxy/commons/models';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-workshops-table',
  templateUrl: './workshops-table.component.html',
  styleUrls: ['./workshops-table.component.scss']
})
export class WorkshopsTableComponent implements OnChanges {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: string[] = ['name', 'instructor', 'date', 'start', 'end', 'actions'];
  dataSource: MatTableDataSource<Workshop[]> = new MatTableDataSource([]);

  @Input() workshops: Workshop[] = [];
  @Output() edit: EventEmitter<string> = new EventEmitter<string>();
  @Output() remove: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.workshops.currentValue) {
      this.dataSource = new MatTableDataSource(changes.workshops.currentValue);
      this.dataSource.paginator = this.paginator;
    }
  }

}
