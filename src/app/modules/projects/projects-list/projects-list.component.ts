import { Component, Input, OnInit } from '@angular/core';
import { Projects } from 'src/app/core/data/projects';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit {
  @Input() projects = Projects; //default to all projects

  constructor() {}

  ngOnInit(): void {}
}
