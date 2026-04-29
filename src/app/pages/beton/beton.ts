import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../core/translate.pipe';

@Component({
  selector: 'app-beton',
  imports: [TranslatePipe],
  templateUrl: './beton.html',
  styleUrls: ['../_division.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BetonPage {}
