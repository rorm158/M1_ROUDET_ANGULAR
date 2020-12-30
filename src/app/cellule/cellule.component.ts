import { Component, OnInit } from '@angular/core';
import { ConteneurComponent } from '../conteneur/conteneur.component';
import { LotCerealesComponent } from '../lot-cereales/lot-cereales.component';
import {SondeComponent} from '../sonde/sonde.component';

@Component({
  selector: 'app-cellule',
  templateUrl: './cellule.component.html',
  styleUrls: ['./cellule.component.css']
})
export class CelluleComponent extends ConteneurComponent {

  private _id : Number;
  private _nbSonde : Number;
  private _temperature : Number;
  private _lotCereale : LotCerealesComponent;
  private _sondes : Array<SondeComponent>;

  constructor(id : Number, nbSonde : Number, temperature : Number, lotCereale : LotCerealesComponent, sondes : Array<SondeComponent>) { 
    super(1000, lotCereale.type, false);
    this._id = id;
    this._nbSonde = nbSonde;
    this._temperature = temperature;
    this._lotCereale = lotCereale;
    this._sondes = sondes;
  }

  public ForteTemperateur() : Boolean {
    return (this._temperature > 35);
  }

  ngOnInit(): void {
  }

}
