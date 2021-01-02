import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accident',
  templateUrl: './accident.component.html',
  styleUrls: ['./accident.component.css']
})
export class AccidentComponent implements OnInit {

  id : number;  //Identifiant de l'accident
  libelle : string; //Libellé de l'accident
  source : string; //D'où vient l'accident
  description : string; //Description détaillée de l'accident
  date : Date;  //Date de l'accident

  constructor()
  {
    
  }

  public setId(id: number)
  {
    this.id = id;
  }

  public getId() : number
  {
    return this.id;
  }

  public setLibelle(libelle: string)
  {
    this.libelle = libelle;
  }

  public getLibelle() : string
  {
    return this.libelle;
  }

  public setSource(source: string)
  {
    this.source = source;
  }

  public getSource(): string
  {
    return this.source;
  }

  public setDescription(description: string)
  {
    this.description = description;
  }

  public getDescription(): string
  {
    return this.description;
  }

  public setDate(date: Date)
  {
    this.date = date;
  }

  public getDate(): Date
  {
    return this.date;
  }


  ngOnInit(): void {
  }

}
