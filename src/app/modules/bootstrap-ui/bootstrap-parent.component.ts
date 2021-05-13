import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-parent',
  templateUrl: './bootstrap-parent.component.html',
  styleUrls: ['./bootstrap-parent.component.scss']
})
export class BootstrapParentComponent implements OnInit {

  showSidenav: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
