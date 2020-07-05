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
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883175/birthday/72847524_1335201236670991_5038913799519311686_n_t7pr5g.jpg",
      caption: "Our Taffy!",
      message: "Let's always pretend that you love him more than us combined."
    },
    {
      left: "73%",
      top: "54%",
      size: "0.7rem",
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883177/birthday/82282443_1402567223267341_765156574731426950_n_rsi4uy.jpg",
      caption: "Young Ladies",
      message: "This memory is as blur as me looking at you without glasses but I am sure it was a magnificent one like every other."
    },
    {
      left: "91%",
      top: "32%",
      size: "0.7rem",
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883177/birthday/71951351_924434561359680_952802077364697167_n_qgf4hk.jpg",
      caption: "Mind readers",
      message: "Neha- I want to eat... \n Morvi- choco lava cake \n Neha- let's order... \n Morvi- bread sticks \n I don't know how you did it but that was mind-bending how you knew what was going through my head this day."
    },
    {
      left: "76%",
      top: "27%",
      size: "0.7rem",
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883182/birthday/106115020_930226527404929_2510287695074466531_n_f9wtkc.jpg",
      caption: "We Dare you",
      message: "Asking ways from creepy people when the it was almost the middle of night is our speciality but asking for a ride is next level."
    },
    {
      left: "43%",
      top: "48%",
      size: "0.7rem",
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883175/birthday/72847524_1335201236670991_5038913799519311686_n_t7pr5g.jpg",
      caption: "Our Taffy!",
      message: "Let's always pretend that you love him more than us combined."
    },
    {
      left: "93%",
      top: "68%",
      size: "0.7rem",
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883177/birthday/82282443_1402567223267341_765156574731426950_n_rsi4uy.jpg",
      caption: "Young Ladies",
      message: "This memory is as blur as me looking at you without glasses but I am sure it was a magnificent one like every other."
    },
    {
      left: "77%",
      top: "66%",
      size: "0.7rem",
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883177/birthday/71951351_924434561359680_952802077364697167_n_qgf4hk.jpg",
      caption: "Mind readers",
      message: "Neha- I want to eat... \n Morvi- choco lava cake \n Neha- let's order... \n Morvi- bread sticks \n I don't know how you did it but that was mind-bending how you knew what was going through my head this day."
    },
    {
      left: "68%",
      top: "86%",
      size: "0.7rem",
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883182/birthday/106115020_930226527404929_2510287695074466531_n_f9wtkc.jpg",
      caption: "We Dare you",
      message: "Asking ways from creepy people when the it was almost the middle of night is our speciality but asking for a ride is next level."
    },
    {
      left: "29%",
      top: "88%",
      size: "0.7rem",
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883175/birthday/72847524_1335201236670991_5038913799519311686_n_t7pr5g.jpg",
      caption: "Our Taffy!",
      message: "Let's always pretend that you love him more than us combined."
    },
    {
      left: "28%",
      top: "74%",
      size: "0.7rem",
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883177/birthday/82282443_1402567223267341_765156574731426950_n_rsi4uy.jpg",
      caption: "Young Ladies",
      message: "This memory is as blur as me looking at you without glasses but I am sure it was a magnificent one like every other."
    },
    {
      left: "12%",
      top: "65%",
      size: "0.7rem",
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883177/birthday/71951351_924434561359680_952802077364697167_n_qgf4hk.jpg",
      caption: "Mind readers",
      message: "Neha- I want to eat... \n Morvi- choco lava cake \n Neha- let's order... \n Morvi- bread sticks \n I don't know how you did it but that was mind-bending how you knew what was going through my head this day."
    },
    {
      left: "3%",
      top: "35%",
      size: "0.7rem",
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883182/birthday/106115020_930226527404929_2510287695074466531_n_f9wtkc.jpg",
      caption: "We Dare you",
      message: "Asking ways from creepy people when the it was almost the middle of night is our speciality but asking for a ride is next level."
    },
    {
      left: "21%",
      top: "26%",
      size: "0.7rem",
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883175/birthday/72847524_1335201236670991_5038913799519311686_n_t7pr5g.jpg",
      caption: "Our Taffy!",
      message: "Let's always pretend that you love him more than us combined."
    },
    {
      left: "3%",
      top: "10%",
      size: "1.1rem",
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883177/birthday/82282443_1402567223267341_765156574731426950_n_rsi4uy.jpg",
      caption: "Young Ladies",
      message: "This memory is as blur as me looking at you without glasses but I am sure it was a magnificent one like every other."
    },
    {
      left: "47%",
      top: "33%",
      size: "1.3rem",
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883177/birthday/71951351_924434561359680_952802077364697167_n_qgf4hk.jpg",
      caption: "Mind readers",
      message: "Neha- I want to eat... \n Morvi- choco lava cake \n Neha- let's order... \n Morvi- bread sticks \n I don't know how you did it but that was mind-bending how you knew what was going through my head this day."
    },
    {
      left: "19%",
      top: "77%",
      size: "0.8rem",
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883182/birthday/106115020_930226527404929_2510287695074466531_n_f9wtkc.jpg",
      caption: "We Dare you",
      message: "Asking ways from creepy people when the it was almost the middle of night is our speciality but asking for a ride is next level."
    },
    {
      left: "65%",
      top: "24%",
      size: "1rem",
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883175/birthday/72847524_1335201236670991_5038913799519311686_n_t7pr5g.jpg",
      caption: "Our Taffy!",
      message: "Let's always pretend that you love him more than us combined."
    },
    {
      left: "92%",
      top: "10%",
      size: "1rem",
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883177/birthday/82282443_1402567223267341_765156574731426950_n_rsi4uy.jpg",
      caption: "Young Ladies",
      message: "This memory is as blur as me looking at you without glasses but I am sure it was a magnificent one like every other."
    },
    {
      left: "72%",
      top: "4%",
      size: "1.1rem",
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883177/birthday/71951351_924434561359680_952802077364697167_n_qgf4hk.jpg",
      caption: "Mind readers",
      message: "Neha- I want to eat... \n Morvi- choco lava cake \n Neha- let's order... \n Morvi- bread sticks \n I don't know how you did it but that was mind-bending how you knew what was going through my head this day."
    },
    {
      left: "62%",
      top: "48%",
      size: "1.3rem",
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883182/birthday/106115020_930226527404929_2510287695074466531_n_f9wtkc.jpg",
      caption: "We Dare you",
      message: "Asking ways from creepy people when the it was almost the middle of night is our speciality but asking for a ride is next level."
    },
    {
      left: "10%",
      top: "48%",
      size: "0.7rem",
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883175/birthday/72847524_1335201236670991_5038913799519311686_n_t7pr5g.jpg",
      caption: "Our Taffy!",
      message: "Let's always pretend that you love him more than us combined."
    },
    {
      left: "15%",
      top: "15%",
      size: "1.1rem",
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883177/birthday/82282443_1402567223267341_765156574731426950_n_rsi4uy.jpg",
      caption: "Young Ladies",
      message: "This memory is as blur as me looking at you without glasses but I am sure it was a magnificent one like every other."
    },
    {
      left: "40%",
      top: "20%",
      size: "0.7rem",
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883177/birthday/71951351_924434561359680_952802077364697167_n_qgf4hk.jpg",
      caption: "Mind readers",
      message: "Neha- I want to eat... \n Morvi- choco lava cake \n Neha- let's order... \n Morvi- bread sticks \n I don't know how you did it but that was mind-bending how you knew what was going through my head this day."
    },
    {
      left: "87%",
      top: "48%",
      size: "0.9rem",
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883182/birthday/106115020_930226527404929_2510287695074466531_n_f9wtkc.jpg",
      caption: "We Dare you",
      message: "Asking ways from creepy people when the it was almost the middle of night is our speciality but asking for a ride is next level."
    },
    {
      left: "28%",
      top: "35%",
      size: "0.7rem",
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883175/birthday/72847524_1335201236670991_5038913799519311686_n_t7pr5g.jpg",
      caption: "Our Taffy!",
      message: "Let's always pretend that you love him more than us combined."
    },
    {
      left: "40%",
      top: "67%",
      size: "0.7rem",
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883177/birthday/82282443_1402567223267341_765156574731426950_n_rsi4uy.jpg",
      caption: "Young Ladies",
      message: "This memory is as blur as me looking at you without glasses but I am sure it was a magnificent one like every other."
    },
    {
      left: "62%",
      top: "68%",
      size: "0.7rem",
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883177/birthday/71951351_924434561359680_952802077364697167_n_qgf4hk.jpg",
      caption: "Mind readers",
      message: "Neha- I want to eat... \n Morvi- choco lava cake \n Neha- let's order... \n Morvi- bread sticks \n I don't know how you did it but that was mind-bending how you knew what was going through my head this day."
    },
    {
      left: "48%",
      top: "88%",
      size: "0.7rem",
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883182/birthday/106115020_930226527404929_2510287695074466531_n_f9wtkc.jpg",
      caption: "We Dare you",
      message: "Asking ways from creepy people when the it was almost the middle of night is our speciality but asking for a ride is next level."
    },
    {
      left: "87%",
      top: "88%",
      size: "0.7rem",
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883175/birthday/72847524_1335201236670991_5038913799519311686_n_t7pr5g.jpg",
      caption: "Our Taffy!",
      message: "Let's always pretend that you love him more than us combined."
    },
  ]


  preview = false;
  imgSrc = "";
  caption = "";
  message = "";

  hidePreview() {
    this.preview = false;
  }

  showPreview(ref) {
    var id = ref.id;
    id = id.replace('img', '');
    id = id * 1;

    this.imgSrc = this.stars[id].imgage;
    this.caption = this.stars[id].caption;
    this.message = this.stars[id].message;

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
