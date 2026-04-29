import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DIVISIONS } from '../../core/divisions';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../core/translate.pipe';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './cards.html',
  styleUrl: './cards.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Cards {
  protected readonly divisions = DIVISIONS;

  protected readonly cards = [
    {
      key: 'bau' as const,
      services: [
        'cards.bau.services.0',
        'cards.bau.services.1',
        'cards.bau.services.2',
        'cards.bau.services.3',
      ],
    },
    {
      key: 'beton' as const,
      services: [
        'cards.beton.services.0',
        'cards.beton.services.1',
        'cards.beton.services.2',
        'cards.beton.services.3',
      ],
    },
    {
      key: 'heim' as const,
      services: [
        'cards.heim.services.0',
        'cards.heim.services.1',
        'cards.heim.services.2',
        'cards.heim.services.3',
      ],
    },
  ];
}
