export type Division = 'home' | 'bau' | 'beton' | 'heim';

export interface DivisionConfig {
  key: Division;
  /** short label shown in the nav switcher */
  label: string;
  /** full company name */
  fullName: string;
  /** secondary tagline ("hoch- und tiefbau", etc.) */
  tagline: string;
  /** CSS class applied to the app root to swap the accent palette */
  themeClass: string;
  /** static accent color (for landing cards / footer tags / shared chrome) */
  accent: string;
  /** dark variant (used as hero/contact background on division pages) */
  primary: string;
  /** route path */
  route: string;
}

export const DIVISIONS: Record<Division, DivisionConfig> = {
  home: {
    key: 'home',
    label: 'Gruppe',
    fullName: 'CLERC AG',
    tagline: 'Drei Fachbereiche',
    themeClass: '',
    accent: '#1a1a1a',
    primary: '#1a1a1a',
    route: '/',
  },
  bau: {
    key: 'bau',
    label: 'bau',
    fullName: 'CLERC bau AG',
    tagline: 'hoch- und tiefbau',
    themeClass: 'theme-bau',
    accent: '#1a3cb5',
    primary: '#0f1f6b',
    route: '/bau',
  },
  beton: {
    key: 'beton',
    label: 'beton-trenn',
    fullName: 'CLERC beton-trenn AG',
    tagline: 'bohren - schneiden',
    themeClass: 'theme-beton',
    accent: '#00915e',
    primary: '#004d32',
    route: '/beton-trenn',
  },
  heim: {
    key: 'heim',
    label: 'eigenheim',
    fullName: 'CLERC eigenheim AG',
    tagline: 'planen - realisieren',
    themeClass: 'theme-heim',
    accent: '#b83225',
    primary: '#6b1510',
    route: '/eigenheim',
  },
};

/** the three operating divisions (excludes the Gruppe landing) */
export const DIVISION_KEYS: Division[] = ['bau', 'beton', 'heim'];
