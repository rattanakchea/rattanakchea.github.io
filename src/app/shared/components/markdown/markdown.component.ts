import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss'],
})
export class MarkdownComponent implements OnInit {
  @Input() login: string = '';
  @Input() repo: string = ''; //repo name
  url: string = '';

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    console.log(this.login, this.repo);

    this.url = `https://raw.githubusercontent.com/${this.login}/${this.repo}/master/README.md`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes: ', changes);

    this.login = changes.login?.currentValue || this.login;
    this.repo = changes.repo?.currentValue || this.repo;

    this.getReadmeFileURL(this.login, this.repo).subscribe(
      (downloadUrl) => {
        this.url = downloadUrl;
      },
      (error) => {
        console.log('error: ', error);
      }
    );

    // this is not always valid URL
    // need to fetch from Github
  }

  getReadmeFileURL(owner: string, repoName: string): Observable<any> {
    console.log('get readme file: ');

    // let URL = `https://raw.githubusercontent.com/rattanakchea/rattanakchea.github.io/master/README.md`;
    // return of(URL).pipe(share());

    let URL = `https://api.github.com/repos/${owner}/${repoName}/readme`;
    return this.httpClient
      .get(URL)
      .pipe(map((result: any) => result.download_url));
  }
}
