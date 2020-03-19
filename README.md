# README

This is my portfolio site built in 2020 using Angular 9.

## Features

- Mostly front end projects that interact with third-party APIs or the backend that I have built.
- loading screen when making API calls, can be seen on slow network with latency

- `ng new rattanak2020 --directory=./ --style=scss --routing=true`
- generate projects component in App Module `ng g c projects --module app.module`
- generate interceptor: `ng g interceptor interceptors/Loading --skipTests=true`
- generate UI service `ng g service services/UI`

## Generate new Module

- ng g module songLyrics --routing=true
- ng g module algorithmVisualizer --routing=true

## Generate a component inside a module (case sensitive)

- ng g c song-lyrics/home --module song-lyrics.module

## generate a service

- ng g s covid19-dashboard/c19

## Example

- ng g module layouts/fullscreen
- ng g c layouts/fullscreen

## My TODO

- [x] Http interceptor & Loading Service
- [ ] Layout modules and components
  - [ ] fullscreen layout for standalone application/project/module per se.
- [x] Modal / dialogue component
- [] Angular SharedModule for header, footer components
- Angular Material Snackbar
- [] Dark Theme

## Internal projects

- Song Lyrics Finder
- Algorithms Visualizer

---

## References

- HTTP interceptor: https://levelup.gitconnected.com/the-correct-way-to-make-api-requests-in-an-angular-application-22a079fe8413
- Loading Screen tutorial: https://nezhar.com/blog/create-a-loading-screen-for-angular-apps/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
