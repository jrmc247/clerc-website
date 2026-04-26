import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DIVISIONS } from '../../core/divisions';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  protected readonly divisions = DIVISIONS;

  protected readonly cards = [
    {
      key: 'bau' as const,
      services: ['Hochbau', 'Tiefbau', 'Umbau & Renovationen', 'Umgebungsarbeiten'],
    },
    {
      key: 'beton' as const,
      services: ['Kernbohren', 'Schneiden', 'Seilsägen', 'Rückbau & Umbau'],
    },
    {
      key: 'heim' as const,
      services: ['Eigenheimplanung', 'Neubau', 'Beratung & Planung', 'Realisierung'],
    },
  ];

  protected readonly milestones = [
    { year: '1947', label: 'Gründung', color: 'var(--c-bau)' },
    { year: '1968', label: '2. Generation', color: '#888' },
    { year: '1980er', label: '60 Mitarbeitende', color: 'var(--c-beton)' },
    { year: '2001', label: '3. Generation', color: 'var(--c-heim)' },
    { year: 'Heute', label: 'Digital & modern', color: '#1a1a1a' },
  ];
}
