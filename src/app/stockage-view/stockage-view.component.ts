import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StockageService } from '../services/stockage.service';
import { SiloComponent } from '../silo/silo.component';

@Component({
  selector: 'app-stockage-view',
  templateUrl: './stockage-view.component.html',
  styleUrls: ['./stockage-view.component.css']
})
export class StockageViewComponent implements OnInit {
  silo : SiloComponent;
  siloSubscription : Subscription;

  constructor(private stockageService : StockageService) { }

  ngOnInit(): void {
    this.siloSubscription = this.stockageService.siloSubject.subscribe((silo : SiloComponent) => {
      this.silo = silo;
    });
    this.stockageService.emitSiloSubject();
  }

}
