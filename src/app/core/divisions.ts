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
  /** path under /public to the brand logo SVG; absent for the Gruppe state */
  logo?: string;
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
    accent: '#6c6c6c',
    primary: '#d4d4d4',
    route: '/',
  },
  heim: {
    key: 'heim',
    label: 'eigenheim',
    fullName: 'CLERC eigenheim AG',
    tagline: 'planen - realisieren',
    themeClass: 'theme-heim',
    accent: '#c4161d',
    primary: '#6b0e12',
    logo: 'logos/logo_eigenheim.svg',
    route: '/eigenheim',
  },
  bau: {
    key: 'bau',
    label: 'bau',
    fullName: 'CLERC bau AG',
    tagline: 'hoch- und tiefbau',
    themeClass: 'theme-bau',
    accent: '#213a89',
    primary: '#11214f',
    logo: 'logos/logo_bau.svg',
    route: '/bau',
  },
  beton: {
    key: 'beton',
    label: 'beton-trenn',
    fullName: 'CLERC beton-trenn AG',
    tagline: 'bohren - schneiden',
    themeClass: 'theme-beton',
    accent: '#00aaaf',
    primary: '#00595c',
    logo: 'logos/logo_beton-trenn.svg',
    route: '/beton-trenn',
  },
};

/** the three operating divisions (excludes the Gruppe landing) */

export const DIVISION_KEYS: Division[] = ['heim', 'bau', 'beton'];
