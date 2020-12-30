import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conteneur',
  templateUrl: './conteneur.component.html',
  styleUrls: ['./conteneur.component.css']
})
export class ConteneurComponent implements OnInit {

  _capacite : Number;
  _typeCereale : String;
  _plein : Boolean;

  constructor(capacite : Number, typeCereale : String, plein : Boolean) { 
    this._capacite = capacite;
    this._typeCereale = typeCereale;
    this._plein = plein;
  }

  ngOnInit(): void {
  }

}
