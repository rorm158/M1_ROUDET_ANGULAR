import { Component, Input, OnInit } from '@angular/core';
import { LotCerealesComponent } from "../lot-cereales/lot-cereales.component";
import { SiloComponent } from "../silo/silo.component";

export class StockageService{
    @Input() silos : Array<SiloComponent> = new Array<SiloComponent>();  //Silos
    nb_cellules_max : number = 10;  //Nombre max de cellules par silo
    indice_silo : number = 0;   //ID courant du prochain silo à créer

    constructor() {
        this.ajouterSilo();
        this.ajouterSilo();
        this.ajouterSilo();
    }

    //Ajoute un nouveau silo à la liste des silos
    public ajouterSilo() : void{
        this.silos.push(new SiloComponent());
        this.silos[this.indice_silo].initSilo(this.nb_cellules_max, this.indice_silo);
        console.log("MEOW " + this.silos[0].listeCellule.length);
        this.indice_silo++;
    }

    //Ajoute un lot de céréales dans l'un des silos existants (renvoie true si l'ajout a bien été effectué)
    public ajouterLotCereales(lotCereale : LotCerealesComponent) : Boolean{
        var ajout : Boolean = false;
        this.silos.forEach(function (silo){
            if(!ajout){
                if(!silo.siloPlein()){
                    ajout = silo.ajouterCereales(lotCereale);
                }
            }
        });

        return ajout;
    }

    //Retire un lot de céréales en fonction de son numéro de lot
    public retirerLotCereales(numLot : string) : LotCerealesComponent {
        var lotCereales : LotCerealesComponent = null;
        
        this.silos.forEach(function (silo){
            if(lotCereales == null){
                lotCereales = silo.retirerLotCereales(numLot);
            }
        });

        return lotCereales;
    }
}