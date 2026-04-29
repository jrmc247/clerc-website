import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../../core/translate.pipe';

@Component({
  selector: 'app-heim-finanzierung',
  imports: [TranslatePipe],
  templateUrl: './finanzierung.html',
  styleUrls: ['../../_subpage.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeimFinanzierung {}
