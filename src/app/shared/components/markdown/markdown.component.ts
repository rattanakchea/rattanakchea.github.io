import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss'],
})
export class MarkdownComponent implements OnInit {
  @Input() login: string = '';
  @Input() repo: string = ''; //repo name
  url: string = '';

  constructor() {}

  ngOnInit(): void {
    this.url = `https://raw.githubusercontent.com/${this.login}/${this.repo}/master/README.md`;
  }
}
