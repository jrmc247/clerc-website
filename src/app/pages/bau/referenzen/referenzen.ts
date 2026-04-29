import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../../core/translate.pipe';

@Component({
  selector: 'app-bau-referenzen',
  imports: [TranslatePipe],
  templateUrl: './referenzen.html',
  styleUrls: ['../../_subpage.scss', '../../_gallery-placeholder.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BauReferenzen {}
