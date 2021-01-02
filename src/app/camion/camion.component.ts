import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-camion',
  templateUrl: './camion.component.html',
  styleUrls: ['./camion.component.css']
})
export class CamionComponent implements OnInit {

  plaque: string ="CS-009-NN";
	plein: boolean;
	@Input() typeCereale: string;
	quantite: number;
	destination: string;
	@Input() action: boolean;

  constructor() { 
    
  }

  ngOnInit(): void {
    this.action = false;
  }

  getAction()
  {
    return this.action;
  }

  setAction(action : boolean)
  {
    this.action = action;
  }

  setTypeCereale(typeCereale)
  {
    this.typeCereale = typeCereale;
  }
}
