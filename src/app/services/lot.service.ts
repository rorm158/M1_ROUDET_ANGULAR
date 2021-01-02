import { Component, OnInit } from '@angular/core';
import { LotCerealesComponent } from '../lot-cereales/lot-cereales.component';
import { CamionComponent } from '../camion/camion.component';
import { FossesReceptionComponent } from '../fosses-reception/fosses-reception.component';

export class LotService
{
    lots: Array<LotCerealesComponent> = new Array<LotCerealesComponent>();
    lotRecup: Array<LotCerealesComponent> = new Array<LotCerealesComponent>();
    camions: Array<CamionComponent> = new Array<CamionComponent>();
    fosses : FossesReceptionComponent;

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
            camion.typeCereale = "ferme la";
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
        this.lotRecup.push(new LotCerealesComponent());
        let i : number = 0;
        this.lotRecup.forEach(function(lot){
            lot.setNumLot(i);
            lot.set();
            i++;
        });
    }

    /*clean(i : number)
    {
        this.lots[i].clean(); 
    }*/
}