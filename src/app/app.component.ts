import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
  siloSubscription : Subscription;
  //index : number;

  constructor (private lotService : LotService, private stockageService : StockageService)
  {
    this.lots = this.lotService.lotRecup;
    this.camions = this.lotService.camions;
    //this.silo = this.stockageService.silo;
    //console.log(this.silo.listeCellule[0].typeCereale);
    //this.silo.listeCellule[0].type = 0;
  }

  ngOnInit()
  {
    this.siloSubscription = this.stockageService.siloSubject.subscribe((silo : SiloComponent) => {
      this.silo = silo;
      this.silo.listeCellule[0].type = 0;
    });
    this.stockageService.emitSiloSubject();
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