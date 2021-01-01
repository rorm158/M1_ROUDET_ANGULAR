import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { CelluleComponent } from '../cellule/cellule.component';

@Component({
  selector: 'app-sonde',
  templateUrl: './sonde.component.html',
  styleUrls: ['./sonde.component.css']
})
export class SondeComponent implements OnInit {

  private idSonde : number;
  private cellule : CelluleComponent;

  constructor() { 
  }

  public Ventile() : void {
    this.cellule.Ventiler();
  }

  public DeclencheAlarme() : void {

  }

  ngOnInit(): void {
  }

  public initSonde(_idSonde:number, _cellule : CelluleComponent) : void{
    this.setIdSonde(_idSonde);
    this.setCellules(_cellule);
  }

  public setIdSonde(_idSonde:number) : void{
    this.idSonde = _idSonde;
  }

  public setCellules(_cellule : CelluleComponent) : void{
    this.cellule = _cellule;
  }
}
