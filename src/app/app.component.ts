import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
import { LotService } from './services/lot.service';
import { StockageService } from './services/stockage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Beuzelin';
  stockageService : StockageService = new StockageService();
  lots : any[];
  camions : any[];
  silos : any[];
  //index : number;

  constructor (private lotService : LotService)
  {
    this.lots = this.lotService.lots;
    this.camions = this.lotService.camions;
  }

  ngOnInit()
  {
    this.silos = this.stockageService.silos;
    console.log(this.stockageService.silos.length);
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