import { Routes } from '@angular/router';
import type { Division } from './core/divisions';

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

  /* ── BAU ───────────────────────────────────────────────────────── */
  {
    path: 'bau',
    loadComponent: () => import('./pages/bau/bau').then((m) => m.BauPage),
    data: { division: 'bau' satisfies Division },
    title: 'CLERC bau AG — Hoch- und Tiefbau',
    children: [
      { path: '', redirectTo: 'angebot', pathMatch: 'full' },
      {
        path: 'angebot',
        loadComponent: () => import('./pages/bau/angebot/angebot').then((m) => m.BauAngebot),
        title: 'Angebot — CLERC bau AG',
      },
      {
        path: 'referenzen',
        loadComponent: () => import('./pages/bau/referenzen/referenzen').then((m) => m.BauReferenzen),
        title: 'Referenzen — CLERC bau AG',
      },
    ],
  },

  /* ── BETON-TRENN ────────────────────────────────────────────────── */
  {
    path: 'beton-trenn',
    loadComponent: () => import('./pages/beton/beton').then((m) => m.BetonPage),
    data: { division: 'beton' satisfies Division },
    title: 'CLERC beton-trenn AG — Bohren & Schneiden',
    children: [
      { path: '', redirectTo: 'angebot', pathMatch: 'full' },
      {
        path: 'angebot',
        loadComponent: () => import('./pages/beton/angebot/angebot').then((m) => m.BetonAngebot),
        title: 'Angebot — CLERC beton-trenn AG',
      },
      {
        path: 'referenzen',
        loadComponent: () => import('./pages/beton/referenzen/referenzen').then((m) => m.BetonReferenzen),
        title: 'Referenzen — CLERC beton-trenn AG',
      },
    ],
  },

  /* ── EIGENHEIM ──────────────────────────────────────────────────── */
  {
    path: 'eigenheim',
    loadComponent: () => import('./pages/heim/heim').then((m) => m.HeimPage),
    data: { division: 'heim' satisfies Division },
    title: 'CLERC eigenheim AG — Planen & Realisieren',
    children: [
      { path: '', redirectTo: 'angebot', pathMatch: 'full' },
      {
        path: 'angebot',
        loadComponent: () => import('./pages/heim/angebot/angebot').then((m) => m.HeimAngebot),
        title: 'Angebot — CLERC eigenheim AG',
      },
      {
        path: 'projekte',
        loadComponent: () => import('./pages/heim/projekte/projekte').then((m) => m.HeimProjekte),
        title: 'Aktuelle Projekte — CLERC eigenheim AG',
      },
      {
        path: 'bauland',
        loadComponent: () => import('./pages/heim/bauland/bauland').then((m) => m.HeimBauland),
        title: 'Baulandparzellen — CLERC eigenheim AG',
      },
      {
        path: 'ideenhaeuser',
        loadComponent: () => import('./pages/heim/ideenhaeuser/ideenhaeuser').then((m) => m.HeimIdeenhaeuser),
        title: 'Ideenhäuser — CLERC eigenheim AG',
      },
      {
        path: 'finanzierung',
        loadComponent: () => import('./pages/heim/finanzierung/finanzierung').then((m) => m.HeimFinanzierung),
        title: 'Finanzierung — CLERC eigenheim AG',
      },
      {
        path: 'referenzen',
        loadComponent: () => import('./pages/heim/referenzen/referenzen').then((m) => m.HeimReferenzen),
        title: 'Referenzen — CLERC eigenheim AG',
      },
      {
        path: 'team',
        loadComponent: () => import('./pages/heim/team/team').then((m) => m.HeimTeam),
        title: 'Team — CLERC eigenheim AG',
      },
    ],
  },

  { path: '**', redirectTo: '' },
];
