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
  @ViewChild('val') val;


  questionArray = [
    {
      question: "capital of punjab",
      answer: "chandigarh"
    },
    {
      question: "capital of india",
      answer: "delhi"
    }

  ]

  answerArray = [
    {
      question: "You did It!",
      answer: "message1"
    },
    {
      question: "Awesome!",
      answer: "message2"
    }

  ]


  selectedQuestion = 0;
  selectedAnswer = 0;

  constructor() { }

  ngOnInit() {
  }

  showGift = false;

  disabelBtn = false;

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
        this.showGift = true;
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

  selectedLockImg = 0;
  shakelock = false;
  formSuccess = false;



  hideGift() {
    this.showGift = false;
    this.formSuccess = false;
    this.selectedAnswer = 1;
  }

  onSubmit() {

    let ans = this.val.nativeElement.value;


    // First Question
    if (this.selectedQuestion == 0) {
      if (ans == this.questionArray[this.selectedQuestion].answer) {

        this.formSuccess = true;
        this.selectedQuestion = 1;

      }
      else {
        this.shakelock = true;
        setTimeout(() => this.shakelock = false, 2000);
      }
    }

    // Second Question
    if (this.selectedQuestion == 1) {
      if (ans == this.questionArray[this.selectedQuestion].answer) {

        this.formSuccess = true;
        this.disabelBtn = true;

      }
      else {
        this.shakelock = true;
        setTimeout(() => this.shakelock = false, 2000);
      }
    }
  }




}
