import { Component, OnInit } from '@angular/core';
import { LotService } from './services/lot.service';

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

  constructor (private lotService : LotService)
  {
    this.lots = this.lotService.lots;
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