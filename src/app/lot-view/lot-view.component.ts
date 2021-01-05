import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
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
  selector : number;

  constructor(private lotService : LotService ) {
    this.lots = this.lotService.lots;
    this.camions = this.lotService.camions;
  }

  refresh()
  {
    this.lots = this.lotService.lots;
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

  add(i:number)
  {
    let ajoute : boolean = AppComponent.app.ajouterCereales(this.lots[i]);
    if (ajoute)
    {
      this.lotService.add(i);
      this.lots[i].add();
    }
  }

  check()
  {
    console.log(this.lots);
  }
}
