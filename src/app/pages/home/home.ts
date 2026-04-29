import { ChangeDetectionStrategy, Component } from '@angular/core';
import { History } from '../history/history';
import { Cards } from '../cards/cards';
import { TranslatePipe } from '../../core/translate.pipe';

@Component({
  selector: 'app-home',
  imports: [History, Cards, TranslatePipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
