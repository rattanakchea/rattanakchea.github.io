export const pagesRoutes = [
  {
    path: 'robinhood', //lazy load route
    loadChildren: () =>
      import('./pages/robinhood/robinhood.module').then(
        (m) => m.RobinhoodLibModule
      ),
  },
  {
    path: 'bootstrap-ui',
    loadChildren: () =>
      import('./pages/bootstrap-ui/bootstrap-ui.module').then(
        (m) => m.BootstrapUIModule
      ),
  },
  {
    path: 'github-repo', //lazy load route
    loadChildren: () =>
      import('./pages/github-repo/github-repo.module').then(
        (m) => m.GithubRepoModule
      ),
  },
];
