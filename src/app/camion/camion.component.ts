import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camion',
  templateUrl: './camion.component.html',
  styleUrls: ['./camion.component.css']
})
export class CamionComponent implements OnInit {

  private plaque: string;
	private plein: boolean;
	private typeCereale: string;
	private quantite: number;
	private destination: string;
	private action: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
