import { Component, OnInit } from '@angular/core';
import { LotCerealesComponent } from '../lot-cereales/lot-cereales.component';

export class LotService
{
    lots: Array<LotCerealesComponent> = new Array<LotCerealesComponent>();

    constructor()
    {
        this.lots.push(new LotCerealesComponent('1','Chocapic',1,1,1,'1'));
        this.lots.push(new LotCerealesComponent('2','Nesquik',2,2,2,'2'));
        this.lots.push(new LotCerealesComponent('3','Crunch',3,3,3,'3'));
        this.lots.push(new LotCerealesComponent('4','Lion',4,4,4,'4'));
    }

    /*lots = [
        {
            numLot: '1',
            type: 'lion',
            poids: '20 kg',
            tauxHumidite: 'ambiant',
            qualite: 'bonne',
            origine: 'saint-etienne'
        },
        {
            numLot: '12',
            type: 'chocapic',
            poids: '10 kg',
            tauxHumidite: 'élevé',
            qualite: 'mauvaise',
            origine: 'paris'
        }
    ]*/
}