import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../core/theme.service';
import { DIVISIONS, DIVISION_KEYS } from '../../core/divisions';

@Component({
  selector: 'app-logo',
  imports: [RouterLink],
  templateUrl: './logo.html',
  styleUrl: './logo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {
  protected readonly theme = inject(ThemeService);
  protected readonly current = this.theme.current;

  /** the three operating divisions, rendered as stacked image layers */
  protected readonly divisions = computed(() =>
    DIVISION_KEYS.map((k) => DIVISIONS[k]).filter((d) => !!d.logo),
  );
}
