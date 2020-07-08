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
      heading: "Really?",
      question: "You have entered a small treasure hunt game! \nMountains remind us of the irregular beautiful moments that we have in our life. \nOne can always gaze at the beauty from the top or from the lap of the valley. \nWhat is the mountain you last googled and is “beautiful to the power raised infinity”?",
      answer: "hunza valley"
    },
    {
      heading: "Last One!",
      question: "What does Michael ask Pam to spread on his foot that he burned on a George Forman grill?",
      answer: "butter"
    }

  ]

  answerArray = [
    {
      question: "Indeed!",
      answer: "And thats how memories are made. \nWe may or may not see the hunza valley but sure mountains are getting close for us to visit!"
    },
    {
      question: "That was sweet!",
      answer: "Let's get you a treat for your lips and your family! \nEnjoy this delicious chocolate. You've earned it."
    }

  ]


  selectedQuestion = 0;
  selectedAnswer = 0;

  constructor() { }

  ngOnInit() {
  }

  showGift = false;

  disabelBtn = false;

  spinning = false;

  spin() {

    this.spinning = true;
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
      this.spinning = false;
    }, 2000);

    setTimeout(() => {
      this.strawberry.nativeElement.src = imagesArray[r3];
    }, 1800);
  }

  selectedLockImg = 0;
  shakelock = false;
  formSuccess = false;



  hideGift() {
    // this.showGift = false;
    this.formSuccess = false;
    this.selectedAnswer = this.selectedAnswer + 1;
    console.log("qestion", this.selectedQuestion);
    console.log("answer", this.selectedAnswer);
  }

  hideGift1() {
    this.showGift = false;
  }

  onSubmit() {

    let ans: String = this.val.nativeElement.value;

    ans = ans.toLowerCase();
    ans = ans.trim();





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
        this.selectedQuestion = 2;

      }
      else {
        this.shakelock = true;
        setTimeout(() => this.shakelock = false, 2000);
      }
    }
  }




}
