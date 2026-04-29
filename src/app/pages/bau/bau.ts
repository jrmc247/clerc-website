import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../core/translate.pipe';

@Component({
  selector: 'app-bau',
  imports: [TranslatePipe],
  templateUrl: './bau.html',
  styleUrls: ['../_division.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BauPage {}
