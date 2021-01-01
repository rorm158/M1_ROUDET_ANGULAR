import { Component, OnInit } from '@angular/core';
import { LotService } from '../services/lot.service';

@Component({
  selector: 'app-lot-view',
  templateUrl: './lot-view.component.html',
  styleUrls: ['./lot-view.component.css']
})
export class LotViewComponent implements OnInit {
  title = 'Beuzelin';
  lots : any[];
  camions : any[];
  //index : number;

  constructor(private lotService : LotService ) {
    this.lots = this.lotService.lots;
    this.camions = this.lotService.camions;
  }

  ngOnInit(): void {
  }

  rendreDispo()
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
  }

}
