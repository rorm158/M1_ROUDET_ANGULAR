import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { CelluleComponent } from '../cellule/cellule.component';

@Component({
  selector: 'app-silo',
  templateUrl: './silo.component.html',
  styleUrls: ['./silo.component.css']
})
export class SiloComponent implements OnInit {

  private listeCellule : Array<CelluleComponent>;
  private nbCellule : number;
  private idSilo : number;

  constructor() { 
  }

  ngOnInit(): void {
  }

  public initSilo(_listeCellule:Array<CelluleComponent>, _nbCellule : number, _idSilo : number) : void{
    this.setListeCellule(_listeCellule);
    this.setNbCellule(_nbCellule);
    this.setSilo(_idSilo);
  }

  public setListeCellule(_listeCellule:Array<CelluleComponent>) : void{
    this.listeCellule = _listeCellule;
  }

  public setNbCellule(_nbCellule : number) : void{
    this.nbCellule = _nbCellule;
  }

  public setSilo(_idSilo : number) : void{
    this.idSilo = _idSilo;
  }

}
