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

  private _id : number;
  private _nbSonde : number;
  private _temperature : number;
  private _lotCereale : LotCerealesComponent;
  private _sondes : Array<SondeComponent>;

  constructor(id : number, nbSonde : number, temperature : number, lotCereale : LotCerealesComponent, sondes : Array<SondeComponent>) { 
    super(1000, lotCereale.type, false);
    this._id = id;
    this._nbSonde = nbSonde;
    this._temperature = temperature;
    this._lotCereale = lotCereale;
    this._sondes = sondes;
  }

  public ForteTemperature() : Boolean {
    return (this._temperature > 15);
  }

  public Ventiler() : void {
    if(this._temperature > 10)
      this._temperature--;
  }

  ngOnInit(): void {
  }

}
