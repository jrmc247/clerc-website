import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../../core/translate.pipe';

@Component({
  selector: 'app-beton-angebot',
  imports: [TranslatePipe],
  templateUrl: './angebot.html',
  styleUrls: ['../../_subpage.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BetonAngebot {}
