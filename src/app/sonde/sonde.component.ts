import { Component, OnInit } from '@angular/core';
import { CelluleComponent } from '../cellule/cellule.component';

@Component({
  selector: 'app-sonde',
  templateUrl: './sonde.component.html',
  styleUrls: ['./sonde.component.css']
})
export class SondeComponent implements OnInit {

  private idSonde : number; //ID de la sonde
  private cellule : CelluleComponent; //Cellule correspondante

  constructor() { 
  }

  //Ventile la cellule
  public Ventile() : void {
    this.cellule.Ventiler();
  }

  //Déclenche l'alarme
  public DeclencheAlarme() : void {

  }

  ngOnInit(): void {
  }

  //Initialisation
  public initSonde(_idSonde:number, _cellule : CelluleComponent) : void{
    this.setIdSonde(_idSonde);
    this.setCellules(_cellule);
  }

  //Affecter l'id de la sonde
  public setIdSonde(_idSonde:number) : void{
    this.idSonde = _idSonde;
  }

  //Affecte la cellule correspondante
  public setCellules(_cellule : CelluleComponent) : void{
    this.cellule = _cellule;
  }
}
