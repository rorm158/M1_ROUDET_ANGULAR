import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { CelluleComponent } from '../cellule/cellule.component';

@Component({
  selector: 'app-sonde',
  templateUrl: './sonde.component.html',
  styleUrls: ['./sonde.component.css']
})
export class SondeComponent implements OnInit {

  private idSonde : number;
  private cellules : Array<CelluleComponent>;

  constructor() { 
  }

  public Ventile() : void {
    
  }

  public DeclencheAlarme() : void {

  }

  ngOnInit(): void {
  }

  initSonde(_idSonde:number, _cellules : Array<CelluleComponent>) : void{
    this.setIdSonde(_idSonde);
    this.setCellules(_cellules);
  }

  setIdSonde(_idSonde:number) : void{
    this.idSonde = _idSonde;
  }

  setCellules(_cellules : Array<CelluleComponent>) : void{
    this.cellules = _cellules;
  }
}
