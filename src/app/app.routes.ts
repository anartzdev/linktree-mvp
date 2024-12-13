import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        /*loadComponent: () =>
          import('./pages/home/home.component').then((mod) => mod.HomeComponent),*/
        loadComponent: () =>
          import('./pages/home/home.component').then(mod => mod.HomeComponent)
      },
      {
        path: '**',
        loadComponent: () =>
          import('./pages/page-not-found/page-not-found.component').then(
            (mod) => mod.PageNotFoundComponent
          ),
      },
];
