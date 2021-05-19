import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { merge, Observable, of as observableOf, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { IProject } from '../web-resources.component';

@Component({
  selector: 'app-web-resources-table',
  templateUrl: './web-resources-table.component.html',
  styleUrls: ['./web-resources-table.component.scss'],
})
export class WebResourcesTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['Title', 'URL', 'Category'];
  pageSize = 20;

  dataSource: MatTableDataSource<IProject> | null = null;

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  @Input() set projects(projects: IProject[]) {
    console.log(
      '🚀 ~ file: web-resources-table.component.ts ~ line 23 ~ WebResourcesTableComponent ~ @Input ~ projects',
      projects
    );
    this.dataSource = new MatTableDataSource(projects);
  }

  constructor() {
    console.log('rc: ', this.dataSource);
  }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    if (this.dataSource)
      this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource?.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
