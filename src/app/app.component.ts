import { Component, OnInit } from '@angular/core';
import { LotService } from './services/lot.service';
import { StockageService } from './services/stockage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Beuzelin';
  //stockageService : StockageService;// = new StockageService();
  lots : any[];
  camions : any[];
  silos : any[];
  //index : number;

  constructor (private lotService : LotService, private stockageService : StockageService)
  {
    this.lots = this.lotService.lots;
    this.camions = this.lotService.camions;
    this.silos = this.stockageService.silos;
    console.log(this.silos[0].listeCellule[0].id);
    this.silos[0].listeCellule[0].id = 10;
    console.log(this.silos[0].listeCellule[0].id);
  }

  ngOnInit()
  {
  }

  check()
  {
    console.log(this.lots);
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