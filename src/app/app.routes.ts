import { Routes } from '@angular/router';
import type { Division } from './core/divisions';

/**
 * Route data carries `division` so the App shell can drive the
 * ThemeService from a single subscription instead of each page wiring it up.
 */
export interface RouteData {
  division: Division;
}

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home').then((m) => m.HomePage),
    data: { division: 'home' satisfies Division },
    title: 'CLERC AG — Ihre Partner am Bau',
  },
  {
    path: 'bau',
    loadComponent: () => import('./pages/bau/bau').then((m) => m.BauPage),
    data: { division: 'bau' satisfies Division },
    title: 'CLERC bau AG — Hoch- und Tiefbau',
  },
  {
    path: 'beton-trenn',
    loadComponent: () => import('./pages/beton/beton').then((m) => m.BetonPage),
    data: { division: 'beton' satisfies Division },
    title: 'CLERC beton-trenn AG — Bohren & Schneiden',
  },
  {
    path: 'eigenheim',
    loadComponent: () => import('./pages/heim/heim').then((m) => m.HeimPage),
    data: { division: 'heim' satisfies Division },
    title: 'CLERC eigenheim AG — Planen & Realisieren',
  },
  { path: '**', redirectTo: '' },
];
