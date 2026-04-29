import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../core/theme.service';
import { DIVISIONS, DIVISION_KEYS } from '../../core/divisions';
import { LogoComponent } from '../logo/logo';
import { TranslatePipe } from '../../core/translate.pipe';
import { LangSwitcher } from '../lang-switcher/lang-switcher';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, LogoComponent, TranslatePipe, LangSwitcher],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  protected readonly theme = inject(ThemeService);
  protected readonly home = DIVISIONS['home'];
  protected readonly divisionTabs = DIVISION_KEYS.map((k) => DIVISIONS[k]);
}
