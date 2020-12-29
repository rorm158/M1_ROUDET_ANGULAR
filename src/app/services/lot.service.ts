import { Component, OnInit } from '@angular/core';
import { LotCerealesComponent } from '../lot-cereales/lot-cereales.component';
import { CamionComponent } from '../camion/camion.component';
import { FossesReceptionComponent } from '../fosses-reception/fosses-reception.component';

export class LotService
{
    lots: Array<LotCerealesComponent> = new Array<LotCerealesComponent>();
    camions: Array<CamionComponent> = new Array<CamionComponent>();
    fosses: Array<FossesReceptionComponent> = new Array<FossesReceptionComponent>();
    camionAdd : CamionComponent;


    constructor()
    {
        this.camions.push(new CamionComponent());
        this.camions.push(new CamionComponent());
        this.camions.push(new CamionComponent());
        this.camions.push(new CamionComponent());

        //this.fosses.push(new FossesReceptionComponent());
    }

    camionDispo()
    {
        let dispo = false;
        this.camions.forEach(function(camion) {
            if (!camion.getAction())
            {
                dispo = true;
            }
        });
        return dispo;
    }

    ramenerLot()
    {
        this.lots.push(new LotCerealesComponent());
    }
}