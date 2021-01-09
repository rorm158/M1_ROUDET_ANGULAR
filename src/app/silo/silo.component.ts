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

  @Input() listeCellule: Array<CelluleComponent> = new Array<CelluleComponent>(); //Liste de cellules
  listeSonde : Array<SondeComponent> = new Array<SondeComponent>(); //Liste des sondes
  nbCellule : number = 10;  //Nb max de cellules
  @Input() idSilo : number = 0; //Id du silo

  constructor() { 
    this.initSilo(10, 0);
  }

  ngOnInit(): void {
  }

  //Initialisation du silo
  public initSilo(_nbCellule : number, _idSilo : number) : void{
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

    this.setNbCellule(_nbCellule);
    this.setSilo(_idSilo);
  }

  //Renvoie une couleur en fonction de l'état du silo/des cellules
  public getColor() : String {
    var etatMax = 0;
    var couleur = "#39A842";
    //couleur = "#D13321";

    this.listeCellule.forEach(function (cellule){
      if(cellule.qualite == "Mauvaise" && etatMax <= 1)
        etatMax = 1;
      if(cellule.etat == "Fortes températures" && etatMax <= 2)
        etatMax = 2;
      if(cellule.etat == "Incendie")
        etatMax = 3;
    });
    if(etatMax == 1)
      couleur = "#994C00";
    if(etatMax == 2)
      couleur = "#FF9F51";
    if(etatMax == 3)
      couleur = "#D13321";
    
    return couleur;
  }

  //Remet les cellules à 20 C°
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
        if(!cellule.estPleine() && !cellule.endommage){
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

  //Récupère les cellules
  public getCellules() : Array<CelluleComponent>{
    return this.listeCellule;
  }

  //Affecte une liste de cellules
  public setListeCellule(_listeCellule:Array<CelluleComponent>) : void{
    this.listeCellule = _listeCellule;
  }

  //Affecte un nb de cellules max
  public setNbCellule(_nbCellule : number) : void{
    this.nbCellule = _nbCellule;
  }

  //Affecte un id de cellules
  public setSilo(_idSilo : number) : void{
    this.idSilo = _idSilo;
  }

  //Renvoie vrai si il y a des insectes présents
  public presenceInsectes() : Boolean{
    var res : Boolean = false;
    this.listeCellule.forEach(function (cellule){
      if(cellule.lotCereale != null){
        if(cellule.lotCereale.qualite == "Mauvaise")
          res = true;
      }
    });
    
    return res;
  }

  //Simulation de la présence d'insectes (on considère ici que la présence d'insectes diminue la qualité des céréales)
  public SimulerInsectes() : void{
    console.log("Simuler insectes");
    this.listeCellule.forEach(function (cellule){
      if(cellule.lotCereale != null && cellule.qualite != "Incendiés"){
        cellule.lotCereale.qualite = "Mauvaise";
        cellule.ActualiserLot();
      }
    });
  }

  //On applique l'insecticide sur les cellules (cela revient à améliorer la qualité des céréales)
  public AppliquerInsecticide() : void{
    console.log("Insecticide");
    this.listeCellule.forEach(function (cellule){
      if(cellule.lotCereale != null && cellule.qualite != "Incendiés"){
        cellule.lotCereale.qualite = "Bonne";
        cellule.ActualiserLot();
      }
    });
  }

}
