import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candle',
  templateUrl: './candle.component.html',
  styleUrls: ['./candle.component.css']
})
export class CandleComponent implements OnInit {

  flaming = true;

  toggleFlame() {
    this.flaming = !this.flaming;
  }

  constructor() { }

  ngOnInit() {
  }


}
