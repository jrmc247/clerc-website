import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslationService } from './translation.service';

/**
 * Impure pipe that delegates to TranslationService.translate().
 * Because the service holds translations in a signal, Angular's change detection
 * will re-run the pipe whenever the signal is read in the host component's context.
 * Marking the pipe impure ensures the template re-evaluates it when the lang changes.
 *
 * Usage: {{ 'nav.links.offer' | translate }}
 *        {{ 'footer.copyright' | translate: { year: year } }}
 */
@Pipe({
  name: 'translate',
  standalone: true,
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  private readonly i18n = inject(TranslationService);

  transform(key: string, params?: Record<string, string | number>): string {
    return this.i18n.translate(key, params);
  }
}
