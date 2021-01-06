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

  @Input() id : number = -1;
  @Input() nbSonde : number = 1;
  @Input() temperature : number = 15;
  @Input() lotCereale : LotCerealesComponent = null;
  @Input() sonde : SondeComponent = new SondeComponent();
  @Input() type : string = "Vide";
  @Input() etat : string = "OK";
  @Input() poids : string = "";
  @Input() origine : string = "";
  @Input() qualite : string = "";
  @Input() taux_humidite : string = "";
  @Input() endommage : boolean = false;

  constructor() { 
    super();
  }

  public ForteTemperature() : Boolean {
    return (this.temperature > 15);
  }

  public Ventiler() : void {
    if(!this.endommage){
      if(this.temperature > 10)
        this.temperature--;
      else if(this.temperature < 10)
        this.temperature++;
      this.actualiserEtat();
    }
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
    if(this.etat == "Incendie"){
      this.temperature = 100;
      this.endommage = true;
      this.qualite = "Incendiés";
      this.lotCereale.qualite = "Incendiés";
    }
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
    //console.log("ajout de " + this.lotCereale != null ? this.lotCereale.type : "vide");
    if(!this.endommage){
      console.log("ajout cereale");
      this.lotCereale = _lotCereale;
      this.ActualiserLot();
    }
  }

  public ActualiserLot() : void{
    if(this.lotCereale == null){
      this.typeCereale = "Vide";
      this.type = "Vide";
      this.origine = "";
      this.qualite = "";
      this.taux_humidite = "";
      this.poids = "";
    }
    else{
      this.typeCereale = this.lotCereale.type.toString();
      this.type = this.lotCereale.type.toString();
      this.origine = this.lotCereale.origine.toString();
      this.qualite = this.lotCereale.qualite.toString();
      this.taux_humidite = this.lotCereale.tauxHumidite.toString();
      this.poids = this.lotCereale.poids.toString();
    }
  }

  public setSondes(_sonde:SondeComponent) : void{
    this.sonde = _sonde;
  }


  ngOnInit(): void {
  }

}
