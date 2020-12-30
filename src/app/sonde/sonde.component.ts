import { Component, OnInit } from '@angular/core';
import { CelluleComponent } from '../cellule/cellule.component';

@Component({
  selector: 'app-sonde',
  templateUrl: './sonde.component.html',
  styleUrls: ['./sonde.component.css']
})
export class SondeComponent implements OnInit {

  private _idSonde : Number;
  private _cellules : Array<CelluleComponent>;

  constructor(idSonde : Number, cellules : Array<CelluleComponent>) { 
    this._idSonde = idSonde;
    this._cellules = cellules;
  }

  public Ventile() : void {
    
  }

  public DeclencheAlarme() : void {

  }

  ngOnInit(): void {
  }

}
