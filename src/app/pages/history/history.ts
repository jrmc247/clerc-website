import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  imports: [],
  templateUrl: './history.html',
  styleUrl: './history.scss',
})
export class History {
    protected readonly milestones = [
    { year: '1947', label: 'Gründung', color: 'var(--c-bau)' },
    { year: '1968', label: '2. Generation', color: '#888' },
    { year: '1980er', label: '60 Mitarbeitende', color: 'var(--c-beton)' },
    { year: '2001', label: '3. Generation', color: 'var(--c-heim)' },
    { year: 'Heute', label: 'Digital & modern', color: '#1a1a1a' },
  ];
}
