import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LotCerealesComponent } from './lot-cereales/lot-cereales.component';
import { LotService } from './services/lot.service';
import { StockageService } from './services/stockage.service';
import { SiloComponent } from './silo/silo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Beuzelin';
  lots : any[];
  camions : any[];
  cellules : any[];
  static app;
  
  //index : number;

  constructor (private lotService : LotService, private stockageService : StockageService)
  {
    this.lots = this.lotService.lotRecup;
    this.camions = this.lotService.camions;
    this.cellules = this.stockageService.silo.listeCellule;
    //this.stockageService.silo.initSilo(10, 0);
    console.log("taille silo " + this.stockageService.silo.listeCellule.length);
    //this.stockageService.ActualiserLots(this.lotService.lotRecup);
    //console.log(this.stockageService.silo.listeCellule[0].type);
  }

  ngOnInit()
  {
    AppComponent.app = this;
  }

  check()
  {
    console.log(this.lots);
  }

  /*maj() : void
  {
    console.log("maj");
    this.lotService.ActualiserLots(this.lots);
  }*/

  ajouterCereales(lot:LotCerealesComponent) : void{
    this.lotService.ajouterLotCereales(lot);
  }

  /*rendreDispo()
  {
    this.lotService.rendreDispo();
  }

  rendreNonDispo()
  {
    this.lotService.rendreNonDispo();
  }

  camionDispo()
  {
    return this.lotService.camionDispo();
  }

  ramenerLot()
  {
    this.lotService.ramenerLot();
    this.rendreNonDispo();
  }*/

  /*cleani()
  {
    this.lotService.clean(this.index);
  }*/
}