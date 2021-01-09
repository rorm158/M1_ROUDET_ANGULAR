import { Component, Input, OnInit, Injectable, ChangeDetectorRef } from '@angular/core';
import { LotCerealesComponent } from "../lot-cereales/lot-cereales.component";
import { SiloComponent } from "../silo/silo.component";
import { Subject } from 'rxjs';
import { AppComponent } from '../app.component';

@Injectable()
export class StockageService{
    silo : SiloComponent = new SiloComponent(); //Silo
    siloSubject = new Subject<SiloComponent>();
    nb_cellules_max : number = 10;  //Nombre max de cellules par silo
    indice_silo : number = 0;   //ID courant du prochain silo à créer

    constructor() {
    }

    emitSiloSubject(){
        this.siloSubject.next(this.silo);
    }

    //Met à jour les lots contenus dans le stockage
    public ActualiserLots(lotCereales : Array<LotCerealesComponent>) : void {
        for(var i = 0; i < lotCereales.length; i++){
            if(lotCereales[i]){
                this.silo.listeCellule[i].setLotCereale(lotCereales[i]);
                console.log(this.silo.listeCellule[i]);
            }
        }
    }

    //Ajoute un lot de céréales dans l'un des silos existants (renvoie true si l'ajout a bien été effectué)
    public ajouterLotCereales(lotCereale : LotCerealesComponent) : Boolean{
        var ajout : Boolean = false;
        ajout = this.silo.ajouterCereales(lotCereale);
        return ajout;
    }

    //Retire un lot de céréales en fonction de son numéro de lot
    public retirerLotCereales(numLot : string) : LotCerealesComponent {
        var lotCereales : LotCerealesComponent = null;
        if(lotCereales == null){
            lotCereales = this.silo.retirerLotCereales(numLot);
        }
        return lotCereales;
    }
}