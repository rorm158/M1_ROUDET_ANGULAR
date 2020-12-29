import { Component, OnInit } from '@angular/core';
import { CamionComponent } from '../camion/camion.component';

@Component({
  selector: 'app-lot-cereales',
  templateUrl: './lot-cereales.component.html',
  styleUrls: ['./lot-cereales.component.css']
})
export class LotCerealesComponent implements OnInit {

  numLot : String = Math.floor(Math.random() * 10).toString();
  type : String = "Nesquik";
  poids : String = (Math.floor(Math.random() * 30) + 5).toString();
  tauxHumidite : String = Math.floor(Math.random() * 100).toString();;
  qualite : String = "Bonne";
  origine : String = "Paris";
  
  constructor() { 
    
  }

  ngOnInit(): void {
  }
}