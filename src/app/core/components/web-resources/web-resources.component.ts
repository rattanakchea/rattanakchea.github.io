import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-resources',
  templateUrl: './web-resources.component.html',
  styleUrls: ['./web-resources.component.scss'],
})
export class WebResourcesComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    let googleSheetURL = `https://docs.google.com/spreadsheets/d/e/2PACX-1vTZFkD7JiPjB51GslRbZEVZ5A8LChF8J6plQl2oZ2Kdt8UgZf26sF9o-MjEnSq_PEzl_bhE7nCzGSQk/pub?gid=615599393&single=true&output=csv`;
    this.httpClient
      .get(googleSheetURL, { responseType: 'blob' })
      .subscribe((result) => {
        console.log('csv result: ', result);
      });
  }
}
