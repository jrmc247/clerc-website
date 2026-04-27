import { ChangeDetectionStrategy, Component } from '@angular/core';
import { History } from '../history/history';
import { Cards } from '../cards/cards';

@Component({
  selector: 'app-home',
  imports: [History, Cards],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
