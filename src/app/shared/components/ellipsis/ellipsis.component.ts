import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-ellipsis',
  template: `<mat-spinner [diameter]="30"></mat-spinner>`,
  styles: [
    `
      :host {
        display: inline-block;
        margin: 0 10px;
      }
    `,
  ],
})
export class EllipsisComponent {}
