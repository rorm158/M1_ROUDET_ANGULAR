import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StockageService } from '../services/stockage.service';
import { LotService } from '../services/lot.service';
import { SiloComponent } from '../silo/silo.component';

@Component({
  selector: 'app-stockage-view',
  templateUrl: './stockage-view.component.html',
  styleUrls: ['./stockage-view.component.css']
})
export class StockageViewComponent implements OnInit {
  silo : SiloComponent;
  //siloSubscription : Subscription;

  constructor(private lotService : LotService) { 
    //this.silo = this.stockageService.silo;
  }

  ngOnInit(): void {
    /*this.siloSubscription = this.stockageService.siloSubject.subscribe((silo : SiloComponent) => {
      this.silo = silo;
    });
    this.stockageService.emitSiloSubject();*/
  }

  check(){
    /*for(var i:number = 0; i < 10; i++)
      console.log(this.stockageService.silo.listeCellule[i].getLotCereales());*/
    this.lotService.test++;
  }

  getCheck()
  {
    return this.lotService.test;
  }

}
