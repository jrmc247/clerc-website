import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_ID, effect, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { firstValueFrom } from 'rxjs';

export type Lang = 'de' | 'fr';

const SUPPORTED: Lang[] = ['de', 'fr'];
const DEFAULT_LANG: Lang = 'de';
const STORAGE_KEY = 'clerc_lang';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly http = inject(HttpClient);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  private readonly _lang = signal<Lang>(DEFAULT_LANG);
  private readonly _translations = signal<Record<string, unknown>>({});
  private readonly _ready = signal(false);

  readonly lang = this._lang.asReadonly();
  readonly ready = this._ready.asReadonly();

  constructor() {
    effect(() => {
      const l = this._lang();
      if (this.isBrowser) {
        localStorage.setItem(STORAGE_KEY, l);
        document.documentElement.lang = l === 'de' ? 'de-CH' : 'fr-CH';
      }
    });
  }

  async init(): Promise<void> {
    const stored = this.isBrowser ? localStorage.getItem(STORAGE_KEY) : null;
    const initial = this.isSupported(stored) ? stored : DEFAULT_LANG;
    await this.load(initial);
  }

  async setLang(lang: Lang): Promise<void> {
    if (lang === this._lang()) return;
    await this.load(lang);
  }

  /** Resolve a dot-notation key, with optional interpolation of {placeholder} tokens. */
  translate(key: string, params?: Record<string, string | number>): string {
    const raw = this.resolve(key, this._translations());
    if (typeof raw !== 'string') return key;
    if (!params) return raw;
    return raw.replace(/\{(\w+)\}/g, (_, k) => String(params[k] ?? `{${k}}`));
  }

  private async load(lang: Lang): Promise<void> {
    const data = await firstValueFrom(this.http.get<Record<string, unknown>>(`/i18n/${lang}.json`));
    this._translations.set(data);
    this._lang.set(lang);
    this._ready.set(true);
  }

  private resolve(key: string, obj: unknown): unknown {
    return key.split('.').reduce<unknown>((acc, part) => {
      if (acc === null || typeof acc !== 'object') return undefined;
      if (Array.isArray(acc)) {
        const idx = Number(part);
        return Number.isInteger(idx) ? acc[idx] : undefined;
      }
      return (acc as Record<string, unknown>)[part];
    }, obj);
  }

  private isSupported(lang: string | null): lang is Lang {
    return SUPPORTED.includes(lang as Lang);
  }
}
