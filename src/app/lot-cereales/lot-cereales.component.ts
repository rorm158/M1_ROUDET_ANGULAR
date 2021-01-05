import { Component, OnInit, Input } from '@angular/core';
import { CamionComponent } from '../camion/camion.component';

@Component({
  selector: 'app-lot-cereales',
  templateUrl: './lot-cereales.component.html',
  styleUrls: ['./lot-cereales.component.css']
})
export class LotCerealesComponent implements OnInit {

  @Input() numLot : String ;//= Math.floor(Math.random() * 10).toString();
  @Input() type : String = "Nesquik";
  @Input() poids : String; //= (Math.floor(Math.random() * 30) + 5).toString();
  @Input() tauxHumidite : String; //= Math.floor(Math.random() * 100).toString();
  @Input() qualite : String;
  @Input() origine : String = "Paris";
  @Input() analyse : boolean = false;
  @Input() nettoye : boolean = false;
  @Input() ajoute : boolean = false;
  @Input() index : number;
  
  constructor() { 
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