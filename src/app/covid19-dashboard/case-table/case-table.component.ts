import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { C19Service, ICountry } from "../c19.service";

@Component({
  selector: "app-case-table",
  templateUrl: "./case-table.component.html",
  styleUrls: ["./case-table.component.scss"]
})
export class CaseTableComponent implements OnInit, AfterViewInit {
  lastUpdatedAt: Date;

  displayedColumns: string[] = ["id", "country", "confirmed"];
  dataSource: MatTableDataSource<ICountry>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private c19Service: C19Service) {}

  ngOnInit() {
    this.c19Service.getLatest().subscribe((data: ICountry[]) => {
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(data);
      console.log(
        "CaseTableComponent -> ngOnInit -> this.dataSource",
        this.dataSource
      );

      this.dataSource.paginator = this.paginator;
      this.dataSource.paginator.pageSize = 25;
      this.dataSource.sort = this.sort;
      this.lastUpdatedAt = new Date();
    });
  }

  ngAfterViewInit() {}

  applyFilter(event: Event) {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
    // if (this.dataSource && this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }
}
