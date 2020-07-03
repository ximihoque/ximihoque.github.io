import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  stars = [{
    left: "3%",
    top: "10%",
    size: "1.1rem"
  },
  {
    left: "47%",
    top: "33%",
    size: "1.3rem"
  },
  {
    left: "19%",
    top: "77%",
    size: "0.8rem"
  },
  {
    left: "65%",
    top: "24%",
    size: "1rem"
  },
  {
    left: "92%",
    top: "10%",
    size: "1rem"
  },
  {
    left: "72%",
    top: "4%",
    size: "1.1rem"
  },
  {
    left: "62%",
    top: "48%",
    size: "1.3rem"
  },
  {
    left: "10%",
    top: "48%",
    size: "1rem"
  },
  {
    left: "15%",
    top: "15%",
    size: "1.1rem"
  },
  {
    left: "40%",
    top: "20%",
    size: "1rem"
  },
  {
    left: "87%",
    top: "48%",
    size: "0.9rem"
  },

  // 

  {
    left: "28%",
    top: "35%",
    size: "1rem"
  },
  {
    left: "40%",
    top: "67%",
    size: "1rem"
  },
  {
    left: "62%",
    top: "68%",
    size: "1rem"
  },
  {
    left: "48%",
    top: "88%",
    size: "1rem"
  },
  {
    left: "87%",
    top: "88%",
    size: "1rem"
  },
  ]

  runRocket = false;

  goRocket() {
    this.runRocket = true;
  }

  // 
  // 

  showId;

  show(id) {
    this.showId = id;
    console.log(this.showId);
  }


  constructor() { }

  ngOnInit() {
  }

}
