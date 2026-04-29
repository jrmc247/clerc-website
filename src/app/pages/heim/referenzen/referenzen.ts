import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../../core/translate.pipe';

@Component({
  selector: 'app-heim-referenzen',
  imports: [TranslatePipe],
  templateUrl: './referenzen.html',
  styleUrls: ['../../_subpage.scss', '../../_gallery-placeholder.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeimReferenzen {
  protected readonly locations = [
    'Wallenried', 'Tafers', 'Praroman', 'Schmitten', 'Posieux',
    'Le Mouret', 'Plaffeien', 'Kleinbösingen', 'Heitenried',
    'Jeuss', 'Gurmels', 'Düdingen', 'Rechthalten', 'Liebistorf',
  ];
}
