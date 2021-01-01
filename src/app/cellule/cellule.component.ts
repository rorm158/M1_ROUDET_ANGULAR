import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { ConteneurComponent } from '../conteneur/conteneur.component';
import { LotCerealesComponent } from '../lot-cereales/lot-cereales.component';
import {SondeComponent} from '../sonde/sonde.component';

@Component({
  selector: 'app-cellule',
  templateUrl: './cellule.component.html',
  styleUrls: ['./cellule.component.css']
})
export class CelluleComponent extends ConteneurComponent {

  private id : number;
  private nbSonde : number;
  private temperature : number;
  private lotCereale : LotCerealesComponent;
  private sondes : Array<SondeComponent>;

  constructor() { 
    super();
  }

  public ForteTemperature() : Boolean {
    return (this.temperature > 15);
  }

  public Ventiler() : void {
    if(this.temperature > 10)
      this.temperature--;
  }

  initCellule(_id:number, _nbSonde:number, _temperature:number, _lotCereale:LotCerealesComponent, _sondes:Array<SondeComponent>) : void{
    super.initConteneur(1000, _lotCereale.type.toString(), false);
    this.setId(_id);
    this.setNbSonde(_nbSonde);
    this.setTemperature(_temperature);
    this.setLotCereale(_lotCereale);
    this.setSondes(_sondes);
  }

  setId(_id:number) : void{
    this.id = _id;
  }

  setNbSonde(_nbSonde:number) : void{
    this.nbSonde = _nbSonde;
  }

  setTemperature(_temperature:number) : void{
    this.temperature = _temperature;
  }

  setLotCereale(_lotCereale:LotCerealesComponent) : void{
    this.lotCereale = _lotCereale;
  }

  setSondes(_sondes:Array<SondeComponent>) : void{
    this.sondes = _sondes;
  }


  ngOnInit(): void {
  }

}
