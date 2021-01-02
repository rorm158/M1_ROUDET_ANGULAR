import { Component, Input, OnInit, Injectable } from '@angular/core';
import { LotCerealesComponent } from "../lot-cereales/lot-cereales.component";
import { SiloComponent } from "../silo/silo.component";

@Injectable()
export class StockageService{
    //silos : Array<SiloComponent> = new Array<SiloComponent>();  //Silos
    silo : SiloComponent = new SiloComponent();
    nb_cellules_max : number = 10;  //Nombre max de cellules par silo
    indice_silo : number = 0;   //ID courant du prochain silo à créer

    /*constructor() {
        this.ajouterSilo();
        this.ajouterSilo();
        this.ajouterSilo();
    }*/

    //Ajoute un nouveau silo à la liste des silos
    /*public ajouterSilo() : void{
        this.silos.push(new SiloComponent());
        this.silos[this.indice_silo].initSilo(this.nb_cellules_max, this.indice_silo);
        console.log("MEOW " + this.silos[0].listeCellule.length);
        this.indice_silo++;
    }*/

    //Ajoute un lot de céréales dans l'un des silos existants (renvoie true si l'ajout a bien été effectué)
    public ajouterLotCereales(lotCereale : LotCerealesComponent) : Boolean{
        var ajout : Boolean = false;
        ajout = this.silo.ajouterCereales(lotCereale);
        return ajout;
        /*this.silos.forEach(function (silo){
            if(!ajout){
                if(!silo.siloPlein()){
                    ajout = silo.ajouterCereales(lotCereale);
                }
            }
        });

        return ajout;*/
    }

    //Retire un lot de céréales en fonction de son numéro de lot
    public retirerLotCereales(numLot : string) : LotCerealesComponent {
        var lotCereales : LotCerealesComponent = null;
        if(lotCereales == null){
            lotCereales = this.silo.retirerLotCereales(numLot);
        }
        return lotCereales;
        
        /*this.silos.forEach(function (silo){
            if(lotCereales == null){
                lotCereales = silo.retirerLotCereales(numLot);
            }
        });

        return lotCereales;*/
    }
}