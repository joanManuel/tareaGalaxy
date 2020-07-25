import {
  Component,
  OnInit,
  OnChanges,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { Instructor } from '@galaxy/commons/models';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-instructor-table',
  templateUrl: './instructor-table.component.html',
  styleUrls: ['./instructor-table.component.scss'],
})
export class InstructorTableComponent implements OnChanges {
  constructor() {}

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: string[] = ['fullname', 'mail', 'actions'];
  dataSource: MatTableDataSource<Instructor[]> = new MatTableDataSource([]);

  @Input() instructor: Instructor[] = [];
  @Output() edit: EventEmitter<string> = new EventEmitter<string>();
  @Output() remove: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.instructor.currentValue) {
      this.dataSource = new MatTableDataSource(changes.instructor.currentValue);
      this.dataSource.paginator = this.paginator;
    }
  }
}
