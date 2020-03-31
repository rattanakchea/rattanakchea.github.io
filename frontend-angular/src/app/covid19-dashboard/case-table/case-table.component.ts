import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { C19Service, ICountry } from "../services/ainzine/c19.service";

@Component({
  selector: "app-case-table",
  templateUrl: "./case-table.component.html",
  styleUrls: ["./case-table.component.scss"]
})
export class CaseTableComponent implements OnInit, AfterViewInit {
  lastUpdatedAt: Date;
  displayedColumns: string[] = [
    "index",
    "country",
    "confirmed",
    "deaths",
    "recovered"
  ];
  dataSource: MatTableDataSource<ICountry>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private c19Service: C19Service) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.c19Service.getLatest().subscribe((data: ICountry[]) => {
      data.sort((a, b) => {
        return b.confirmed - a.confirmed;
      });

      data.map((item, index) => {
        item.index = index + 1;
        return item;
      });

      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(data);
      console.log(
        "CaseTableComponent -> ngOnInit -> this.dataSource",
        this.dataSource
      );

      this.dataSource.paginator = this.paginator;
      this.dataSource.paginator.pageSize = 20;
      this.dataSource.sort = this.sort;
      this.lastUpdatedAt = new Date();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource && this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
