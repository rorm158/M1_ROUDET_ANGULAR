import { Component, OnInit } from '@angular/core';
import { LotService } from './services/lot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'beuzelin';
  lots : any[];
  camions : any[];

  constructor (private lotService : LotService)
  {
    
  }

  ngOnInit()
  {
    this.lots = this.lotService.lots;
    this.camions = this.lotService.camions;
  }

  camionDispo()
  {
    return this.lotService.camionDispo();
  }

  ramenerLot()
  {
    this.lotService.ramenerLot();
  }
}