import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conteneur',
  templateUrl: './conteneur.component.html',
  styleUrls: ['./conteneur.component.css']
})
export class ConteneurComponent implements OnInit {

  protected _capacite : number;
  protected _typeCereale : String;
  protected _plein : Boolean;

  constructor(capacite : number, typeCereale : String, plein : Boolean) { 
    this._capacite = capacite;
    this._typeCereale = typeCereale;
    this._plein = plein;
  }

  ngOnInit(): void {
  }

}
