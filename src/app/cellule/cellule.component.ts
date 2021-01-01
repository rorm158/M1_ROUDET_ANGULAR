import { Component, Inject, Injectable, OnInit, Input } from '@angular/core';
import { ConteneurComponent } from '../conteneur/conteneur.component';
import { LotCerealesComponent } from '../lot-cereales/lot-cereales.component';
import {SondeComponent} from '../sonde/sonde.component';

@Component({
  selector: 'app-cellule',
  templateUrl: './cellule.component.html',
  styleUrls: ['./cellule.component.css']
})
export class CelluleComponent extends ConteneurComponent {

  @Input() id : number = 1;
  private nbSonde : number;
  private temperature : number;
  private lotCereale : LotCerealesComponent;
  private sonde : SondeComponent;

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

  public initCellule(_id:number, _nbSonde:number, _temperature:number, _lotCereale:LotCerealesComponent, _sonde:SondeComponent) : void{
    super.initConteneur(1000, _lotCereale.type.toString(), false);
    this.setId(_id);
    this.setNbSonde(_nbSonde);
    this.setTemperature(_temperature);
    this.setLotCereale(_lotCereale);
    this.setSondes(_sonde);
  }

  public estPleine() : Boolean{
    return this.lotCereale != null;
  }

  public getLotCereales() : LotCerealesComponent{
    return this.lotCereale;
  }

  public getId() : number{
    return this.id;
  }

  public setId(_id:number) : void{
    this.id = _id;
  }

  public setNbSonde(_nbSonde:number) : void{
    this.nbSonde = _nbSonde;
  }

  public setTemperature(_temperature:number) : void{
    this.temperature = _temperature;
  }

  public setLotCereale(_lotCereale:LotCerealesComponent) : void{
    this.lotCereale = _lotCereale;
  }

  public setSondes(_sonde:SondeComponent) : void{
    this.sonde = _sonde;
  }


  ngOnInit(): void {
  }

}
