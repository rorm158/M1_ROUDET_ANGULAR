import { Component, Inject, Injectable, Input, OnInit } from '@angular/core';
import { CelluleComponent } from '../cellule/cellule.component';
import { LotCerealesComponent } from '../lot-cereales/lot-cereales.component';
import { SondeComponent } from '../sonde/sonde.component';

@Component({
  selector: 'app-silo',
  templateUrl: './silo.component.html',
  styleUrls: ['./silo.component.css']
})
export class SiloComponent implements OnInit {

  //@Input() listeCellule : Array<CelluleComponent>;
  listeCellule: Array<CelluleComponent> = new Array<CelluleComponent>(); //RAJOUT
  private listeSonde : Array<SondeComponent>;
  private nbCellule : number;
  @Input() idSilo : number;

  constructor() { 
    this.listeCellule.push(new CelluleComponent()); //RAJOUT
    this.listeCellule.push(new CelluleComponent()); //RAJOUT
    this.listeCellule.push(new CelluleComponent()); //RAJOUT
  }

  ngOnInit(): void {
  }

  //Initialisation du silo
  public initSilo(_nbCellule : number, _idSilo : number) : void{
    var cellules : Array<CelluleComponent> = new Array<CelluleComponent>(_nbCellule);
    var i:number = _nbCellule * _idSilo;
    cellules.forEach(function(cellule){
      var sonde:SondeComponent = new SondeComponent();
      sonde.initSonde(i, cellule);
      cellule.initCellule(i, 1, 15, null, sonde);
      this.listeSonde.push(sonde);
      i++;
    });

    this.setListeCellule(cellules);
    this.setNbCellule(_nbCellule);
    this.setSilo(_idSilo);
  }

  //Ajout d'un lot de céréales dans le silo (renvoi true si l'ajout a été réalisé)
  public ajouterCereales(lotCereale : LotCerealesComponent) : Boolean {
    var ajout : Boolean = false;
    
    this.listeCellule.forEach(function (cellule){
      if(!ajout){
        if(!cellule.estPleine()){
          ajout = true;
          cellule.setLotCereale(lotCereale);
        }
      }
    });

    return ajout;
  }

  //Vérifie si les cellules du silo sont toutes pleines (renvoi true si elles sont toutes pleines)
  public siloPlein() : Boolean{
    var plein : Boolean = true;
    this.listeCellule.forEach(function (cellule){
      if(!cellule.estPleine())
        plein = false;
    });

    return plein;
  }

  //Retire le lot de céréales correspondant au numLot et le retourne
  public retirerLotCereales(numLot : string) : LotCerealesComponent{
    var lotCereales : LotCerealesComponent;

    this.listeCellule.forEach(function(cellule){
      if(lotCereales == null){
        if(cellule.getLotCereales().numLot == numLot){
          lotCereales = cellule.getLotCereales();
          cellule.setLotCereale(null);
        }
      }
    });

    return lotCereales;
  }

  public getCellules() : Array<CelluleComponent>{
    return this.listeCellule;
  }

  public setListeCellule(_listeCellule:Array<CelluleComponent>) : void{
    this.listeCellule = _listeCellule;
  }

  public setNbCellule(_nbCellule : number) : void{
    this.nbCellule = _nbCellule;
  }

  public setSilo(_idSilo : number) : void{
    this.idSilo = _idSilo;
  }

}
