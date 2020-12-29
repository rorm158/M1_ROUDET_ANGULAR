import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fosses-reception',
  templateUrl: './fosses-reception.component.html',
  styleUrls: ['./fosses-reception.component.css']
})
export class FossesReceptionComponent implements OnInit {

  fosses = [
    {
      num : '1'
    },
    {
      num : '2'
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
