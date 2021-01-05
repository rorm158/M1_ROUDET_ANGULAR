import { Component, OnInit, Input } from '@angular/core';
import { LotCerealesComponent } from '../lot-cereales/lot-cereales.component';
import { CamionComponent } from '../camion/camion.component';
import { FossesReceptionComponent } from '../fosses-reception/fosses-reception.component';
import { SiloComponent } from '../silo/silo.component';
import { InvokeFunctionExpr } from '@angular/compiler';

export class LotService
{
    lots: Array<LotCerealesComponent> = new Array<LotCerealesComponent>();
    lotRecup: Array<LotCerealesComponent> = new Array<LotCerealesComponent>();
    camions: Array<CamionComponent> = new Array<CamionComponent>();
    fosses : FossesReceptionComponent;
    test : number = 0;
    silo : SiloComponent = new SiloComponent();

    constructor()
    {
        this.camions.push(new CamionComponent());
        setTimeout(() => {this.VentilationAuto()}, 1000);   //Ventilation automatique (toutes les 1 seconde)
    }

    camionDispo()
    {
        let dispo = false;
        this.camions.forEach(function(camion) {
            if (camion.action)
            {
                dispo = true;
            }
        });
        return dispo;
    }

    rendreDispo()
    {
        this.camions.forEach(function(camion) {
            camion.action = true;
        });
    }

    rendreNonDispo()
    {
        this.camions.forEach(function(camion) {
            camion.action = false;
        });
    }

    ramenerLot()
    {
        this.lots.push(new LotCerealesComponent());
        let i : number = 0;
        this.lots.forEach(function(lot){
            lot.setNumLot(i);
            i++;
        });
    }

    add(i:number)
    {
        this.lotRecup.push(this.lots[i]);
        /*let tamp = this.lots[i];
        this.lots.splice(i,1);
        this.lotRecup.push(tamp);*/
    }

    /*clean(i : number)
    {
        this.lots[i].clean(); 
    }*/

    //Met à jour les lots contenus dans le stockage (Obsolète)
    /*public ActualiserLots(lotCereales : Array<LotCerealesComponent>) : void {
        for(var i = 0; i < lotCereales.length; i++){
            if(lotCereales[i]){
                this.silo.listeCellule[i].setLotCereale(lotCereales[i]);
                console.log(this.silo.listeCellule[i]);
            }
        }
    }*/

    //Ventile toutes les cellules (fonction se rappelant toutes le 1s)
    VentilationAuto(){
        if(this.silo != null){
            this.silo.listeCellule.forEach(function(cellule){
                cellule.Ventiler();
            });
        }
        setTimeout(() => {this.VentilationAuto()}, 1000);
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