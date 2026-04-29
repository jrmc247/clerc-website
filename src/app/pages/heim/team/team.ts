import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../../core/translate.pipe';

@Component({
  selector: 'app-heim-team',
  imports: [TranslatePipe],
  templateUrl: './team.html',
  styleUrls: ['../../_subpage.scss', './team.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeimTeam {
  protected readonly members = [
    {
      nameKey:  'heim.team.rene.name',
      roleKey:  'heim.team.rene.role',
      phone:    '026 492 54 55',
      email:    'rene.clerc@rega-sense.ch',
    },
    {
      nameKey:  'heim.team.pascal.name',
      roleKey:  'heim.team.pascal.role',
      phone:    '026 492 54 56',
      email:    'tornare@clerc.ch',
    },
  ];
}
