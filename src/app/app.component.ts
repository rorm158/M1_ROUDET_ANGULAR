import { Component, OnInit } from '@angular/core';
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
  //stockageService : StockageService;// = new StockageService();
  lots : any[];
  camions : any[];
  silo : SiloComponent;
  //index : number;

  constructor (private lotService : LotService, private stockageService : StockageService)
  {
    this.lots = this.lotService.lotRecup;
    this.camions = this.lotService.camions;
    this.silo = this.stockageService.silo;
    console.log(this.silo.listeCellule[0].typeCereale);
    this.silo.listeCellule[0].type = "lol";
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