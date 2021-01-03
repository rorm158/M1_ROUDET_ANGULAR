import { Component, Input, OnInit } from '@angular/core';
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
  @Input() listeCellule: Array<CelluleComponent> = new Array<CelluleComponent>(); //RAJOUT
  listeSonde : Array<SondeComponent> = new Array<SondeComponent>();
  nbCellule : number = 10;
  @Input() idSilo : number = 0;

  constructor() { 
    //this.listeCellule.push(new CelluleComponent()); //RAJOUT
    //this.listeCellule.push(new CelluleComponent()); //RAJOUT
    //this.listeCellule.push(new CelluleComponent()); //RAJOUT
    this.initSilo(10, 0);
  }

  ngOnInit(): void {
    //this.initSilo(10, 0);
    //console.log(this.listeCellule[0].temperature);
  }

  //Initialisation du silo
  public initSilo(_nbCellule : number, _idSilo : number) : void{
    //var cellules : Array<CelluleComponent> = new Array<CelluleComponent>();
    //this.listeCellule = new Array<CelluleComponent>();
    //this.listeSonde = new Array<SondeComponent>();

    var i:number = _nbCellule * _idSilo;

    for(var _i = 0; _i < _nbCellule; _i++){
      var cellule : CelluleComponent = new CelluleComponent();
      var sonde:SondeComponent = new SondeComponent();
      sonde.initSonde(i, cellule);
      cellule.initCellule(i, 1, 15, null, sonde);
      this.listeSonde.push(sonde);
      this.listeCellule.push(cellule);
      i++;
    }

    //this.setListeCellule(cellules);
    //console.log("MEOWWW " + this.listeCellule[0].id);
    this.setNbCellule(_nbCellule);
    this.setSilo(_idSilo);
  }

  public Ventiler(){
    this.listeCellule.forEach(function (cellule){
      cellule.temperature = 20;
    });
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
