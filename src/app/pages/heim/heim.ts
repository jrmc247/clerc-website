import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../core/translate.pipe';

@Component({
  selector: 'app-heim',
  imports: [TranslatePipe],
  templateUrl: './heim.html',
  styleUrls: ['../_division.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeimPage {}
