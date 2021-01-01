import { Component, OnInit, Input } from '@angular/core';
import { CamionComponent } from '../camion/camion.component';

@Component({
  selector: 'app-lot-cereales',
  templateUrl: './lot-cereales.component.html',
  styleUrls: ['./lot-cereales.component.css']
})
export class LotCerealesComponent implements OnInit {

  @Input() numLot : String ;//= Math.floor(Math.random() * 10).toString();
  type : String = "Nesquik";
  poids : String; //= (Math.floor(Math.random() * 30) + 5).toString();
  tauxHumidite : String; //= Math.floor(Math.random() * 100).toString();
  qualite : String = "Mauvaise";
  origine : String = "Paris";
  analyse : boolean = false;
  @Input() index : number;
  
  constructor() { 
  }

  ngOnInit(): void {
  }

  setNumLot(num : string)
  {
    this.numLot = num;
  }

  analyser()
  {
    this.poids = (Math.floor(Math.random() * 30) + 5).toString();
    this.tauxHumidite = Math.floor(Math.random() * 100).toString();
    this.analyse = true;
  }

  clean()
  {
    this.tauxHumidite = "15";
    this.qualite = "Bonne";
  }
}