import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../../core/translate.pipe';

@Component({
  selector: 'app-heim-bauland',
  imports: [TranslatePipe],
  templateUrl: './bauland.html',
  styleUrls: ['../../_subpage.scss', './bauland.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeimBauland {
  protected readonly developments = [
    {
      nameKey: 'heim.bauland.beausite.name',
      location: 'Courtepin',
      plots: [
        { ref: 'Art. 607', area: '757 m²', price: 'CHF 620.–/m²' },
        { ref: 'Art. 615', area: '814 m²', price: 'CHF 650.–/m²' },
      ],
    },
    {
      nameKey: 'heim.bauland.pleinsoleil.name',
      location: 'Courtepin',
      plots: [
        { ref: 'Art. 480', area: '763 m²', price: 'CHF 620.–/m²' },
        { ref: 'Art. 687', area: '735 m²', price: 'CHF 620.–/m²' },
        { ref: 'Art. 688', area: '720 m²', price: 'CHF 600.–/m²' },
      ],
    },
  ];
}
