import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GenericHttpClientService } from '../../../services/generic-http-client-service/generic-http-client.service';
import { LogItemDto } from '../../../interfaces/log-item-dto-interface/log-item-dto-interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-log-items-table',
  imports: [
    MatTableModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    DatePipe,
  ],
  templateUrl: './log-items-table.component.html',
  styleUrl: './log-items-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogItemsTableComponent implements OnInit {
  baseApiUrl: string = 'http://188.245.171.230:7023/api';
  dataSource = new MatTableDataSource<LogItemDto>();
  displayedColumns: string[] = [
    'timestamp',
    'connectionId',
    'machineName',
    'level',
    'exception',
    'requestPath',
    'requestMethod',
    'statusCode',
    'elapsed',
  ];
  private readonly _snackBar = inject(MatSnackBar);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private readonly httpClientService: GenericHttpClientService<LogItemDto>
  ) {}

  ngOnInit(): void {
    this.getTableData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getTableData(): void {
    this.httpClientService.getAll(`${this.baseApiUrl}/log-items`).subscribe({
      next: (response) => {
        if (response.statusCode === 200) {
          this.dataSource.data = response.data;
        }
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  refreshTableData(): void {
    this.getTableData();
    this.openSnackBar("Now, you're fresh!", 'Ok');
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
