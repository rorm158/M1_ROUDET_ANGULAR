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

  ngOnInit(): void {
  }

  //rendre disponible un camion
  rendreDispo()
  {
    this.lotService.rendreDispo();
  }

  //rendre non disponible un camion
  rendreNonDispo()
  {
    this.lotService.rendreNonDispo();
  }

  //indique si un camion est dispo ou non
  camionDispo()
  {
    return this.lotService.camionDispo();
  }

  //ramène un lot par un camion
  ramenerLot()
  {
    this.lotService.ramenerLot();
    this.rendreNonDispo();
  }

  //rajoute un lot dans le silo
  add(i:number)
  {
    let ajoute : boolean = AppComponent.app.ajouterCereales(this.lots[i]);
    if (ajoute)
    {
      this.lotService.add(i);
      this.lots[i].add();
    }
  }
}
