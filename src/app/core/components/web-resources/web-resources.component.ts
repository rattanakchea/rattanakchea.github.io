import { Component, OnInit } from '@angular/core';
import { Papa } from 'ngx-papaparse';

export interface IProject {
  Title: string;
  URL: string;
  Category: string;
  Sub_category: string;
  Rating: number;
  Note: string;
}
@Component({
  selector: 'app-web-resources',
  templateUrl: './web-resources.component.html',
  styleUrls: ['./web-resources.component.scss'],
})
export class WebResourcesComponent implements OnInit {
  projects: IProject[] | null = null;

  constructor(private papa: Papa) {
    let googleSheetURL = `https://docs.google.com/spreadsheets/d/e/2PACX-1vTZFkD7JiPjB51GslRbZEVZ5A8LChF8J6plQl2oZ2Kdt8UgZf26sF9o-MjEnSq_PEzl_bhE7nCzGSQk/pub?gid=615599393&single=true&output=csv`;

    this.papa.parse(googleSheetURL, {
      download: true,
      header: true,
      complete: (result) => {
        console.log('Parsed: ', result);

        this.projects = result.data;
      },
    });
  }

  ngOnInit(): void {}
}
