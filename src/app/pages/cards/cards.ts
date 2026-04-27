import { Component } from '@angular/core';
import { DIVISIONS } from '../../core/divisions';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cards',
  imports: [RouterLink],
  templateUrl: './cards.html',
  styleUrl: './cards.scss',
})
export class Cards {
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
}
