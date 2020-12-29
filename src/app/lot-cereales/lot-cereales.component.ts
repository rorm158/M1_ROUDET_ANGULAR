import { Component, OnInit } from '@angular/core';

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
  constructor(/*public numLot: String, public type: String, public poids: Number, public tauxHumidite: Number, public qualite: Number, public origine: String*/) { 
    
  }

  ngOnInit(): void {
  }
}