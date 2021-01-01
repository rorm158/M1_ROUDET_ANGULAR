import { Component, Inject, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-conteneur',
  templateUrl: './conteneur.component.html',
  styleUrls: ['./conteneur.component.css']
})
export class ConteneurComponent implements OnInit {

  protected capacite : number;
  protected typeCereale : string;
  protected plein : boolean;

  constructor() { 
  }

  ngOnInit(): void {
  }

  public initConteneur(_capacite:number, _type:string, _plein:boolean) : void{
    this.setCapacite(_capacite);
    this.setTypeCereale(_type);
    this.setPlein(_plein);
  }

  public setCapacite(_capacite:number) : void{
    this.capacite = _capacite;
  }

  public setTypeCereale(_type:string) : void{
    this.typeCereale = _type;
  }

  public setPlein(_plein:boolean) : void{
    this.plein = _plein;
  }

}
