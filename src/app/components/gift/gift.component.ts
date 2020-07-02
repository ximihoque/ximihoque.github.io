import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})
export class GiftComponent implements OnInit {

  @ViewChild('pizza') pizza;
  @ViewChild('strawberry') strawberry;
  @ViewChild('popcorn') popcorn;


  constructor() { }

  ngOnInit() {
  }

  spin() {

    const imagesArray = ['../../../assets/pizza.png', '../../../assets/popcorn.png', '../../../assets/strawberry.png', '../../../assets/scrolling.gif', '../../../assets/scrolling2.gif']

    this.pizza.nativeElement.src = imagesArray[3];
    this.popcorn.nativeElement.src = imagesArray[4];
    this.strawberry.nativeElement.src = imagesArray[3];

    let r1 = Math.floor(Math.random() * 3);
    let r2 = Math.floor(Math.random() * 3);
    let r3 = Math.floor(Math.random() * 3);

    if ((r1 == r2) && (r1 == r3)) {
      setTimeout(() => {
        alert("gift");
      }, 2100);
    }


    setTimeout(() => {
      this.pizza.nativeElement.src = imagesArray[r1];
    }, 1500);

    setTimeout(() => {
      this.popcorn.nativeElement.src = imagesArray[r2];
    }, 2000);

    setTimeout(() => {
      this.strawberry.nativeElement.src = imagesArray[r3];
    }, 1800);



  }

}
