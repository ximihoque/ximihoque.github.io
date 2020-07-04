import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fire',
  templateUrl: './fire.component.html',
  styleUrls: ['./fire.component.css']
})
export class FireComponent implements OnInit {


  party = false;

  startParty() {
    console.log(this.party);
    this.party = true;
    console.log(this.party);

  }

  constructor() { }

  ngOnInit() {
  }

}
