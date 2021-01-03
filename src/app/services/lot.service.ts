import { Component, OnInit, Input } from '@angular/core';
import { LotCerealesComponent } from '../lot-cereales/lot-cereales.component';
import { CamionComponent } from '../camion/camion.component';
import { FossesReceptionComponent } from '../fosses-reception/fosses-reception.component';
import { SiloComponent } from '../silo/silo.component';

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
    }

    camionDispo()
    {
        let dispo = false;
        this.camions.forEach(function(camion) {
            if (camion.getAction())
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
        console.log(this.lotRecup);
    }

    /*clean(i : number)
    {
        this.lots[i].clean(); 
    }*/

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