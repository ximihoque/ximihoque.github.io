import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  stars = [
    {
      left: "53%",
      top: "12%",
      size: "0.7rem",
      imgage: "../../../assets/cakeBackground.jpeg",
      caption: "caption here",
      message: "some message here"
    },
    {
      left: "73%",
      top: "54%",
      size: "0.7rem",
      imgage: "../../../assests/",
      caption: "caption here",
      message: "some message here"
    },
    {
      left: "91%",
      top: "32%",
      size: "0.7rem",
      imgage: "../../../assests/",
      caption: "caption here",
      message: "some message here"
    },
    {
      left: "76%",
      top: "27%",
      size: "0.7rem",
      imgage: "../../../assests/",
      caption: "caption here",
      message: "some message here"
    },
    {
      left: "43%",
      top: "48%",
      size: "0.7rem",
      imgage: "../../../assests/",
      caption: "caption here",
      message: "some message here"
    },
    {
      left: "93%",
      top: "68%",
      size: "0.7rem",
      imgage: "../../../assests/",
      caption: "caption here",
      message: "some message here"
    },
    {
      left: "77%",
      top: "66%",
      size: "0.7rem",
      imgage: "../../../assests/",
      caption: "caption here",
      message: "some message here"
    },
    {
      left: "68%",
      top: "86%",
      size: "0.7rem",
      imgage: "../../../assests/",
      caption: "caption here",
      message: "some message here"
    },
    {
      left: "29%",
      top: "88%",
      size: "0.7rem",
      imgage: "../../../assests/",
      caption: "caption here",
      message: "some message here"
    },
    {
      left: "28%",
      top: "74%",
      size: "0.7rem",
      imgage: "../../../assests/",
      caption: "caption here",
      message: "some message here"
    },
    {
      left: "12%",
      top: "65%",
      size: "0.7rem",
      imgage: "../../../assests/",
      caption: "caption here",
      message: "some message here"
    },
    {
      left: "3%",
      top: "35%",
      size: "0.7rem",
      imgage: "../../../assests/",
      caption: "caption here",
      message: "some message here"
    },
    {
      left: "21%",
      top: "26%",
      size: "0.7rem",
      imgage: "../../../assests/",
      caption: "caption here",
      message: "some message here"
    },
    {
      left: "3%",
      top: "10%",
      size: "1.1rem",
      imgage: "../../../assests/",
      caption: "caption here",
      message: "some message here"
    },
    {
      left: "47%",
      top: "33%",
      size: "1.3rem",
      imgage: "../../../assests/",
      caption: "caption here",
      message: "some message here"
    },
    {
      left: "19%",
      top: "77%",
      size: "0.8rem",
      imgage: "../../../assests/",
      caption: "caption here",
      message: "some message here"
    },
    {
      left: "65%",
      top: "24%",
      size: "1rem",
      imgage: "../../../assests/",
      caption: "caption here",
      message: "some message here"
    },
    {
      left: "92%",
      top: "10%",
      size: "1rem",
      imgage: "../../../assests/",
      caption: "caption here4",
      message: "some message here4"
    },
    {
      left: "72%",
      top: "4%",
      size: "1.1rem",
      imgage: "../../../assests/",
      caption: "caption here5",
      message: "some message here5"
    },
    {
      left: "62%",
      top: "48%",
      size: "1.3rem",
      imgage: "../../../assests/",
      caption: "caption here",
      message: "some message here"
    },
    {
      left: "10%",
      top: "48%",
      size: "0.7rem",
      imgage: "../../../assests/",
      caption: "caption here",
      message: "some message here"
    },
    {
      left: "15%",
      top: "15%",
      size: "1.1rem",
      imgage: "../../../assests/",
      caption: "caption here1",
      message: "some message here1"
    },
    {
      left: "40%",
      top: "20%",
      size: "0.7rem",
      imgage: "../../../assests/",
      caption: "caption here2",
      message: "some message here2"
    },
    {
      left: "87%",
      top: "48%",
      size: "0.9rem",
      imgage: "../../../assests/",
      caption: "caption here3",
      message: "some message here3"
    },
    {
      left: "28%",
      top: "35%",
      size: "0.7rem",
      imgage: "../../../assests/",
      caption: "caption here4",
      message: "some message here4"
    },
    {
      left: "40%",
      top: "67%",
      size: "0.7rem",
      imgage: "../../../assests/",
      caption: "caption here5",
      message: "some message here5"
    },
    {
      left: "62%",
      top: "68%",
      size: "0.7rem",
      imgage: "../../../assests/",
      caption: "caption here6",
      message: "some message here6"
    },
    {
      left: "48%",
      top: "88%",
      size: "0.7rem",
      imgage: "../../../assests/",
      caption: "caption here7",
      message: "some message here7"
    },
    {
      left: "87%",
      top: "88%",
      size: "0.7rem",
      imgage: "../../../assests/",
      caption: "caption here8",
      message: "some message here8"
    },
  ]


  preview = false;
  imgSrc = "";

  hidePreview() {
    this.preview = false;
  }

  showPreview(ref) {
    var id = ref.id;
    id = id.replace('img', '');
    id = id * 1;

    this.imgSrc = this.stars[id].imgage;
    console.log(this.imgSrc);
    this.preview = true;


  }

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
