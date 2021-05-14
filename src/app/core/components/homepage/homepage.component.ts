import { Component, OnInit } from '@angular/core';
import { Projects } from '../../data/projects';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  projects: any;

  constructor() {}

  ngOnInit(): void {
    this.shuffleProjects();
  }

  shuffleProjects() {
    this.projects = this.random(Projects, 4);
  }

  // get random number of items from an array
  random(array: any[], count: number) {
    // [...array], spread to avoid sort in place
    return [...array].sort(() => 0.5 - Math.random()).slice(0, count);
  }
}
