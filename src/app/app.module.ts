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
    AppRoutingModule
  ],
  providers: [
    LotService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
