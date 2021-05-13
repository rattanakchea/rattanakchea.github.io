import { Component, Input, OnInit } from '@angular/core';
import { Projects } from '../../data/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects = Projects;

  constructor() {}

  ngOnInit(): void {}
}
