import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LotCerealesComponent } from './lot-cereales/lot-cereales.component';
import { CamionComponent } from './camion/camion.component';
import { LotService } from './services/lot.service';
import { FossesReceptionComponent } from './fosses-reception/fosses-reception.component';
import { ConteneurComponent } from './conteneur/conteneur.component';
import { ConvoyeurComponent } from './convoyeur/convoyeur.component';
import { CelluleComponent } from './cellule/cellule.component';
import { SondeComponent } from './sonde/sonde.component';
import { SiloComponent } from './silo/silo.component';
import { LotViewComponent } from './lot-view/lot-view.component';
import { FormsModule } from '@angular/forms';
import { StockageService } from './services/stockage.service';
import { Routes,RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'lots', component: LotViewComponent },
  { path: 'cellule', component: CelluleComponent },
  { path: '', component: LotViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LotCerealesComponent,
    CamionComponent,
    FossesReceptionComponent,
    ConteneurComponent,
    ConvoyeurComponent,
    CelluleComponent,
    SondeComponent,
    SiloComponent,
    LotViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    LotService,
    StockageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
