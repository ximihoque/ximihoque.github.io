import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-campfire',
  templateUrl: './campfire.component.html',
  styleUrls: ['./campfire.component.css']
})
export class CampfireComponent implements OnInit {

  @Input('party') party;
  // flame: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  // toggleFlame() {
  //   this.flame = !this.flame;
  // }

}
