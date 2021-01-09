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

  constructor (private lotService : LotService, private stockageService : StockageService)
  {
    this.lots = this.lotService.lotRecup;
    this.camions = this.lotService.camions;
    this.cellules = this.stockageService.silo.listeCellule;
    console.log("taille silo " + this.stockageService.silo.listeCellule.length);
  }

  ngOnInit()
  {
    AppComponent.app = this;
  }

  check()
  {
    console.log(this.lots);
  }

  ajouterCereales(lot:LotCerealesComponent) : Boolean {
    return this.lotService.ajouterLotCereales(lot);
  }
}