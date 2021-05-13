import { Component, Input, OnInit } from '@angular/core';
import { Projects } from '../../data/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  @Input() projects = Projects; //default to all projects

  constructor() {}

  ngOnInit(): void {}
}
