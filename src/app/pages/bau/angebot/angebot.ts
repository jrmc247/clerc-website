import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../../core/translate.pipe';

@Component({
  selector: 'app-bau-angebot',
  imports: [TranslatePipe],
  templateUrl: './angebot.html',
  styleUrls: ['../../_subpage.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BauAngebot {}
