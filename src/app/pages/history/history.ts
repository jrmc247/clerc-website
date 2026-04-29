import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslatePipe } from '../../core/translate.pipe';
import { TranslationService } from '../../core/translation.service';

interface Milestone {
  year: string;
  label: string;
  color: string;
}

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './history.html',
  styleUrl: './history.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class History {
  private readonly i18n = inject(TranslationService);

  protected readonly colors = ['var(--c-bau)', '#888', 'var(--c-beton)', 'var(--c-heim)', '#1a1a1a'];

  protected get milestones(): Milestone[] {
    return this.colors.map((color, i) => ({
      year: this.i18n.translate(`history.milestones.${i}.year`),
      label: this.i18n.translate(`history.milestones.${i}.label`),
      color,
    }));
  }
}
