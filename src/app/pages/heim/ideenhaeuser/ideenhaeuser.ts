import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../../core/translate.pipe';

interface HouseModel {
  name: string;
  rooms: string;
  price: string;
}

@Component({
  selector: 'app-heim-ideenhaeuser',
  imports: [TranslatePipe],
  templateUrl: './ideenhaeuser.html',
  styleUrls: ['../../_subpage.scss', './ideenhaeuser.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeimIdeenhaeuser {
  protected readonly models: HouseModel[] = [
    { name: 'Millennium', rooms: '5½ / 6½',  price: 'CHF 595\'000 – 655\'000' },
    { name: 'Exotic',     rooms: '5½',        price: 'CHF 620\'000' },
    { name: 'Classic',    rooms: '5',          price: 'CHF 625\'000' },
    { name: 'Campagne',   rooms: '6½',        price: 'CHF 685\'000' },
    { name: 'Futura',     rooms: '5½',        price: 'CHF 625\'000' },
    { name: 'Ambiance',   rooms: '4½',        price: 'CHF 590\'000' },
    { name: 'Elegance',   rooms: '6½',        price: 'CHF 670\'000' },
    { name: 'Glamour',    rooms: '4½',        price: 'CHF 705\'000' },
    { name: 'Excellence', rooms: '5½',        price: 'CHF 625\'000' },
    { name: 'Deluxe',     rooms: '5½ / 6½',  price: 'CHF 715\'000' },
    { name: 'Art',        rooms: '6',          price: 'CHF 680\'000' },
    { name: 'Royale',     rooms: '5½',        price: 'CHF 745\'000' },
    { name: 'Perspective',rooms: '6½',        price: 'CHF 655\'000' },
    { name: 'Avance',     rooms: '5½',        price: 'CHF 615\'000' },
    { name: 'Belle Vue',  rooms: '4½',        price: 'CHF 605\'000' },
    { name: 'Gentillement',rooms: '5½',       price: 'CHF 615\'000' },
    { name: 'Optionale',  rooms: '4½',        price: 'CHF 555\'000' },
    { name: 'Familia',    rooms: '2 × 3½',    price: 'CHF 690\'000' },
    { name: 'Ensemble',   rooms: '4½ / 5½',  price: 'CHF 575\'000' },
    { name: 'Moderne',    rooms: '5½',        price: 'CHF 630\'000' },
    { name: 'Nouvelle',   rooms: '5½',        price: 'CHF 595\'000' },
  ];
}
