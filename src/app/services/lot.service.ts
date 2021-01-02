import { Component, OnInit } from '@angular/core';
import { LotCerealesComponent } from '../lot-cereales/lot-cereales.component';
import { CamionComponent } from '../camion/camion.component';
import { FossesReceptionComponent } from '../fosses-reception/fosses-reception.component';

export class LotService
{
    lots: Array<LotCerealesComponent> = new Array<LotCerealesComponent>();
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

    /*clean(i : number)
    {
        this.lots[i].clean(); 
    }*/
}