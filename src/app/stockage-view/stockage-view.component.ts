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

  constructor(private lotService : LotService) { 
    this.silo = this.lotService.silo;
  }

  ngOnInit(): void {
  }

  check(){
    this.lotService.test++;
  }

  getColor(){
    return this.silo.getColor();
  }

  getCheck()
  {
    return this.lotService.test;
  }

}
