import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslationService, type Lang } from '../../core/translation.service';
import { TranslatePipe } from '../../core/translate.pipe';

@Component({
  selector: 'app-lang-switcher',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './lang-switcher.html',
  styleUrl: './lang-switcher.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LangSwitcher {
  protected readonly i18n = inject(TranslationService);
  protected readonly langs: Lang[] = ['de', 'fr', 'it'];

  protected async select(lang: Lang): Promise<void> {
    await this.i18n.setLang(lang);
  }
}
