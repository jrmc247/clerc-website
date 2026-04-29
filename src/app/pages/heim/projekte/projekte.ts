import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../../core/translate.pipe';

@Component({
  selector: 'app-heim-projekte',
  imports: [TranslatePipe],
  templateUrl: './projekte.html',
  styleUrls: ['../../_subpage.scss', './projekte.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeimProjekte {
  protected readonly projects = [
    {
      name: '"Weitblick"',
      location: 'Rechthalten',
      descKey: 'heim.projekte.weitblick.desc',
      units: [
        { label: '3½-Zi.', price: 'CHF 779\'000+' },
        { label: '4½-Zi.', price: 'CHF 879\'000+' },
        { label: '5½-Zi.', price: 'CHF 979\'000+' },
      ],
      contactName: 'Pascal Tornare',
      contactEmail: 'tornare@clerc.ch',
    },
    {
      name: '"Oberi Matta"',
      location: 'Brünisried',
      descKey: 'heim.projekte.oberimatta.desc',
      units: [],
      contactName: 'Pascal Tornare',
      contactEmail: 'tornare@clerc.ch',
    },
    {
      name: '"Seebacher"',
      location: 'Kleinguschelmuth',
      descKey: 'heim.projekte.seebacher.desc',
      units: [
        { label: 'Haus C', price: 'CHF 1\'085\'000' },
      ],
      contactName: 'Pascal Tornare',
      contactEmail: 'tornare@clerc.ch',
    },
  ];
}
