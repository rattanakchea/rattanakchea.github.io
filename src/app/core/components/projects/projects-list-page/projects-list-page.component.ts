import { Component, Input, OnInit } from '@angular/core';
import { Projects } from 'src/app/core/data/projects';

@Component({
  selector: 'app-projects-list-page',
  templateUrl: './projects-list-page.component.html',
  styleUrls: ['./projects-list-page.component.scss'],
})
export class ProjectsListPageComponent implements OnInit {
  @Input() projects = Projects; //default to all projects

  constructor() {}

  ngOnInit(): void {}
}
