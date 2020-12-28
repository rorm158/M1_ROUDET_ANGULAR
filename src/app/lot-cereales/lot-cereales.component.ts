import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lot-cereales',
  templateUrl: './lot-cereales.component.html',
  styleUrls: ['./lot-cereales.component.css']
})
export class LotCerealesComponent implements OnInit {

  /*numLot : String = "Lol";
  type : String = "";
  poids : String = "";
  tauxHumidite : String = "";
  qualite : String = "";
  origine : String = "";*/
  constructor(public numLot: String, public type: String, public poids: Number, public tauxHumidite: Number, public qualite: Number, public origine: String) { 
    
  }

  ngOnInit(): void {
  }
}