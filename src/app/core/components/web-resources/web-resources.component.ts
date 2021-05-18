import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Papa } from 'ngx-papaparse';

@Component({
  selector: 'app-web-resources',
  templateUrl: './web-resources.component.html',
  styleUrls: ['./web-resources.component.scss'],
})
export class WebResourcesComponent implements OnInit {
  projects: {
    Title: string;
    URL: string;
    Category: string;
    Sub_category: string;
    Rating: number;
    Note: string;
  }[] = [];

  constructor(private httpClient: HttpClient, private papa: Papa) {
    let googleSheetURL = `https://docs.google.com/spreadsheets/d/e/2PACX-1vTZFkD7JiPjB51GslRbZEVZ5A8LChF8J6plQl2oZ2Kdt8UgZf26sF9o-MjEnSq_PEzl_bhE7nCzGSQk/pub?gid=615599393&single=true&output=csv`;
    let csvData = `https://docs.google.com/spreadsheets/d/e/2PACX-1vTtKbv_S8Fdo3HLhm64Tc94WZ6FuqtzqePIjuejNFJxKkUvAE8JF8V2KgKoz1n5jQUDfL8A3F-QoDWk/pub?gid=0&single=true&output=csv`;

    this.papa.parse(googleSheetURL, {
      download: true,
      header: true,
      complete: (result) => {
        console.log('Parsed: ', result);

        this.projects = result.data;
      },
    });
  }

  ngOnInit(): void {
    // let googleSheetURL = `https://docs.google.com/spreadsheets/d/e/2PACX-1vTZFkD7JiPjB51GslRbZEVZ5A8LChF8J6plQl2oZ2Kdt8UgZf26sF9o-MjEnSq_PEzl_bhE7nCzGSQk/pub?gid=615599393&single=true&output=csv`;
    // this.httpClient
    //   .get(googleSheetURL, { responseType: 'blob' })
    //   .subscribe((result) => {
    //     console.log('csv result: ', result);
    //   });
  }
}
