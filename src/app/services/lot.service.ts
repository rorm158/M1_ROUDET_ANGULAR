import { Component, OnInit } from '@angular/core';
import { LotCerealesComponent } from '../lot-cereales/lot-cereales.component';
import { CamionComponent } from '../camion/camion.component';
import { FossesReceptionComponent } from '../fosses-reception/fosses-reception.component';

export class LotService
{
    lots: Array<LotCerealesComponent> = new Array<LotCerealesComponent>();
    camions: Array<CamionComponent> = new Array<CamionComponent>();
    fosses: Array<FossesReceptionComponent> = new Array<FossesReceptionComponent>();

    constructor()
    {
        this.lots.push(new LotCerealesComponent(/*'1','Chocapic',1,1,1,'1'*/));
        this.lots.push(new LotCerealesComponent(/*'2','Nesquik',2,2,2,'2'*/));
        this.lots.push(new LotCerealesComponent(/*'3','Crunch',3,3,3,'3'*/));
        this.lots.push(new LotCerealesComponent(/*'4','Lion',4,4,4,'4'*/));

        this.camions.push(new CamionComponent());
        this.camions.push(new CamionComponent());
        this.camions.push(new CamionComponent());
        this.camions.push(new CamionComponent());

        this.fosses.push(new FossesReceptionComponent());
    }
}