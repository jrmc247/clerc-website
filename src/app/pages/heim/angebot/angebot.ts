import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../../core/translate.pipe';

@Component({
  selector: 'app-heim-angebot',
  imports: [TranslatePipe],
  templateUrl: './angebot.html',
  styleUrls: ['../../_subpage.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeimAngebot {
  protected readonly includedItems = [
    'heim.angebot.includedItems.0',
    'heim.angebot.includedItems.1',
    'heim.angebot.includedItems.2',
    'heim.angebot.includedItems.3',
    'heim.angebot.includedItems.4',
    'heim.angebot.includedItems.5',
    'heim.angebot.includedItems.6',
    'heim.angebot.includedItems.7',
  ];
}
