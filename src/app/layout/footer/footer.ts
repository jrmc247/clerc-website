import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DIVISIONS } from '../../core/divisions';
import { TranslatePipe } from '../../core/translate.pipe';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly divisions = DIVISIONS;
  protected readonly year = new Date().getFullYear();
}
