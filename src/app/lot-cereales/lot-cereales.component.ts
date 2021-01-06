import { Component, OnInit, Input } from '@angular/core';
import { CamionComponent } from '../camion/camion.component';

@Component({
  selector: 'app-lot-cereales',
  templateUrl: './lot-cereales.component.html',
  styleUrls: ['./lot-cereales.component.css']
})
export class LotCerealesComponent implements OnInit {

  @Input() numLot : String;
  @Input() type : String;
  @Input() poids : String;
  @Input() tauxHumidite : String;
  @Input() qualite : String;
  @Input() origine : String;
  @Input() analyse : boolean = false;
  @Input() nettoye : boolean = false;
  @Input() ajoute : boolean = false;
  @Input() index : number;
  types: string[] = ['Blé', 'Orge', 'Pois','Pois','Protéagineux','Colza'];
  origines: string[] = ['Agriculteur 1', 'Agriculteur 2', 'Agriculteur 3','Agriculteur 4','Agriculteur 5'];
  
  constructor() {
    this.type = this.types[Math.floor(Math.random() * 5)];
    this.origine = this.origines[Math.floor(Math.random() * 5)];
  }

  ngOnInit(): void {
  }

  setNumLot(num : number)
  {
    this.numLot = num.toString();
  }

  analyser()
  {
    if (!this.analyse)
    {
      this.poids = (Math.floor(Math.random() * 30) + 5).toString();
      this.tauxHumidite = Math.floor(Math.random() * 100).toString();
      this.analyse = true;
      this.qualite = "Mauvaise";
    }
  }

  clean()
  {
    this.tauxHumidite = "15";
    this.qualite = "Bonne";
    this.nettoye = true;
  }

  add()
  {
    this.ajoute = true;
  }
}