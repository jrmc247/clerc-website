import { Injectable, computed, signal } from '@angular/core';
import { DIVISIONS, type Division, type DivisionConfig } from './divisions';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly _current = signal<Division>('home');

  readonly current = this._current.asReadonly();
  readonly config = computed<DivisionConfig>(() => DIVISIONS[this._current()]);
  readonly themeClass = computed(() => DIVISIONS[this._current()].themeClass);

  set(division: Division): void {
    if (this._current() !== division) {
      this._current.set(division);
    }
  }
}
