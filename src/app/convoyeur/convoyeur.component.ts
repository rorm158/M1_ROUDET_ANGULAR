import { Component, OnInit } from '@angular/core';
//import { Capteur } from './Capteur';
//import { Boisseau } from './Boisseau';
//import { CamionComponent } from '../camion/camion.component';

@Component({
  selector: 'app-convoyeur',
  templateUrl: './convoyeur.component.html',
  styleUrls: ['./convoyeur.component.css']
})

export class ConvoyeurComponent implements OnInit {
    
  idConvoyeur: number;
	vitesse: number;
  marche: boolean;  //true = en marche, false = à l'arrêt
  numLotCereale: string;  //Numéro du lot de céréale actuellement sur le convoyeur
	/*private capteur : Capteur;
	private boisseau : Boisseau;*/
	
  constructor()
  {
		
  }
  
  public recupererLotCereale(lc: string)
  {
    this.numLotCereale = lc;
    this.mettreEnMarche();
  }


  public deposerLotCereale()
  {
    this.numLotCereale = null;
    this.bloqueConvoyeur();
  }
  
  
  public mettreEnMarche()
  {
    this.marche = true;
  }

  public bloqueConvoyeur()
  {
		this.marche = false;
  }
  
  ngOnInit() :void
  {
    this.idConvoyeur = 1;
    this.vitesse = 5;  //Temps que met le convoyeur à transporter les céréales
    this.marche = false;  //Le convoyeur se met en route lorsqu'un lot de céréale est déposé
		/*this.capteur = capteur;
		this.boisseau = boisseau;*/
  }
 }
