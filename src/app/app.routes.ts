import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'first-dog',
    loadComponent: () => import('./first-dog/first-dog.page').then( m => m.FirstDogPage)
  },
  {
    path: 'dog-list',
    loadComponent: () => import('./dog-list/dog-list.page').then( m => m.DogListPage)
  },
];
