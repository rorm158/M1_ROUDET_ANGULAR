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
  lots : any[];
  camions : any[];
  
  //index : number;

  constructor (private lotService : LotService, private stockageService : StockageService)
  {
    this.lots = this.lotService.lotRecup;
    this.camions = this.lotService.camions;
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