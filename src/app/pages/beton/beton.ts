import { ChangeDetectionStrategy, Component, ElementRef, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslatePipe } from '../../core/translate.pipe';

const NAV_HEIGHT = 72;

@Component({
  selector: 'app-beton',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, TranslatePipe],
  templateUrl: './beton.html',
  styleUrls: ['../_division.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BetonPage {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  protected readonly navLinks = [
    { path: 'angebot',    labelKey: 'nav.sub.offer' },
    { path: 'referenzen', labelKey: 'nav.sub.references' },
  ];

  protected scrollToContent(): void {
    if (!this.isBrowser) return;
    const outlet = this.el.nativeElement.querySelector('router-outlet');
    if (!outlet) return;
    const top = outlet.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}
