import { Component, OnInit, Input } from '@angular/core';
import { ActionSequence } from 'protractor';
import { ConteneurComponent } from '../conteneur/conteneur.component';
import { LotCerealesComponent } from '../lot-cereales/lot-cereales.component';
import {SondeComponent} from '../sonde/sonde.component';

@Component({
  selector: 'app-cellule',
  templateUrl: './cellule.component.html',
  styleUrls: ['./cellule.component.css']
})
export class CelluleComponent extends ConteneurComponent {

  @Input() id : number;
  @Input() nbSonde : number;
  @Input() temperature : number;
  @Input() lotCereale : LotCerealesComponent;
  @Input() sonde : SondeComponent;
  @Input() type : string;
  @Input() etat : string = "OK";

  constructor() { 
    super();
  }

  public ForteTemperature() : Boolean {
    return (this.temperature > 15);
  }

  public Ventiler() : void {
    if(this.temperature > 10)
      this.temperature--;
    else if(this.temperature < 10)
      this.temperature++;
    this.actualiserEtat();
  }

  public SimulerAccident() : void{
    if(this.temperature < 40)
      this.temperature += Math.floor(Math.random() * 10) + 5;
    this.actualiserEtat();
  }

  public actualiserEtat() : void{
    if(this.temperature >= 35)
      this.etat = "Incendie";
    else if(this.temperature > 15)
      this.etat = "Fortes températures";
    else if(this.temperature >= 10)
      this.etat = "OK";
    else if(this.temperature > 5)
      this.etat = "Température faible";
    else 
      this.etat = "À réchauffer!";
  }

  public initCellule(_id:number, _nbSonde:number, _temperature:number, _lotCereale:LotCerealesComponent, _sonde:SondeComponent) : void{
    var t = "Vide";
    if(_lotCereale != null)
      t = _lotCereale.type.toString();
    this.type = t;
    super.initConteneur(1000, t, false);
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
    if(_lotCereale == null)
      this.typeCereale = "Vide";
    else
      this.typeCereale = this.lotCereale.type.toString();
  }

  public setSondes(_sonde:SondeComponent) : void{
    this.sonde = _sonde;
  }


  ngOnInit(): void {
  }

}
