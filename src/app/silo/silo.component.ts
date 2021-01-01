import { Component, OnInit } from '@angular/core';
import { CelluleComponent } from '../cellule/cellule.component';

@Component({
  selector: 'app-silo',
  templateUrl: './silo.component.html',
  styleUrls: ['./silo.component.css']
})
export class SiloComponent implements OnInit {

  _listeCellule : Array<CelluleComponent>;
  _nbCellule : number;
  _idSilo : number;

  constructor(listeCellule : Array<CelluleComponent>, nbCellule : number, idSilo : number) { 
    this._listeCellule = listeCellule;
    this._nbCellule = nbCellule;
    this._idSilo = idSilo;
  }

  ngOnInit(): void {
  }

}
