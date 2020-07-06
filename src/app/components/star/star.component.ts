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
      image: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883175/birthday/72847524_1335201236670991_5038913799519311686_n_t7pr5g.jpg",
      caption: "Our Taffy!",
      message: "Let's always pretend that you love him more than us combined.",
    },
    {
      left: "73%",
      top: "54%",
      size: "0.7rem",
      image: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883177/birthday/82282443_1402567223267341_765156574731426950_n_rsi4uy.jpg",
      caption: "Young Ladies",
      message: "This memory is as blur as me looking at you without glasses but I am sure it was a magnificent one like every other."
    },
    {
      left: "91%",
      top: "32%",
      size: "0.7rem",
      image: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883182/birthday/106115020_930226527404929_2510287695074466531_n_f9wtkc.jpg",
      caption: "We Dare you",
      message: "Asking ways from creepy people when the it was almost the middle of night is our speciality but asking for a ride is next level."
    },
    {
      left: "76%",
      top: "27%",
      size: "0.7rem",
      image: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883177/birthday/71951351_924434561359680_952802077364697167_n_qgf4hk.jpg",
      caption: "Mind readers",
      message: "Neha- I want to eat... \n Morvi- choco lava cake \n Neha- let's order... \n Morvi- bread sticks \n I don't know how you did it but that was mind-bending how you knew what was going through my head this day."
    },
    {
      left: "43%",
      top: "48%",
      size: "0.7rem",
      image: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883180/birthday/85239925_697497884149629_602026075185523833_n_mpkseu.jpg",
      caption: "Baby doll",
      message: "And the earth stood still at this very moment"
    },
    {
      left: "93%",
      top: "68%",
      size: "0.7rem",
      image: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883180/birthday/82826774_179527756924069_7886681838082282883_n_lpkvzr.jpg",
      caption: "I, me and phone",
      message: "Watching tiny kitchen all night and then doing photoshoot sounds like us."
    },
    {
      left: "77%",
      top: "66%",
      size: "0.7rem",
      image: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883178/birthday/82644349_301148107959613_3602560713249203613_n_b2ytvn.jpg",
      caption: "Vacaaayy",
      message: "Our traditional 'I am angry while we are on vacay' photograph."
    },
    {
      left: "68%",
      top: "86%",
      size: "0.7rem",
      image: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883182/birthday/106122807_2681856218806980_1741453870086306919_n_g16x8c.jpg",
      caption: "Guess who",
      message: "This photograph sums up every single day with you (i.e.highnote crazy)"
    },
    {
      left: "29%",
      top: "88%",
      size: "0.7rem",
      image: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883182/birthday/105991249_3004396276280366_7640844311938878899_n_jvsint.jpg",
      caption: "Sanity check",
      message: "How do you manage to make the weirdest expression and then say I am the sanest in the family."
    },
    {
      left: "28%",
      top: "74%",
      size: "0.7rem",
      image: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883183/birthday/106138127_274097113857983_8922901926852778135_n_jt6ter.jpg",
      caption: "Twinning",
      message: "Naive, drenched and happy sums this photograph up."
    },
    {
      left: "12%",
      top: "65%",
      size: "0.7rem",
      image: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883184/birthday/84055624_609026319715463_1823001841493540050_n_ghpil2.jpg",
      caption: "Hey There!",
      message: "Your quirk is that you can make a person have a fabulous day."
    },
    {
      left: "3%",
      top: "35%",
      size: "0.7rem",
      image: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883185/birthday/106094742_4710755242283927_7821312543832299735_n_jw6jdd.jpg",
      caption: "Our sweet fam!",
      message: "Thank you for fitting perfectly with a imperfect family."
    },
    {
      left: "21%",
      top: "26%",
      size: "0.7rem",
      image: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883185/birthday/106166907_274766190458723_1911256059442957964_n_gg5b3u.jpg",
      caption: "Papa ki pari",
      message: "You have always been the 'I have to tell her everything' daughter."
    },
    {
      left: "3%",
      top: "10%",
      size: "1.1rem",
      image: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883185/birthday/106186288_283416296335518_5597823867161686244_n_inm1gi.jpg",
      caption: "Mai Sachi",
      message: "Bhai !!!! ❌❌❌❌I just realised Yeh sachi hai"
    },
    {
      left: "47%",
      top: "33%",
      size: "1.3rem",
      image: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883185/birthday/106217648_286529732544691_6318478748364617915_n_i34fxt.jpg",
      caption: "Mallika Sherawat 😂",
      message: "Mai heroine huuuuu"
    },
    {
      left: "19%",
      top: "77%",
      size: "0.8rem",
      image: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883187/birthday/106271224_808383089694787_2084208671402495645_n_elvafj.jpg",
      caption: "My SUV approves too!",
      message: "Thank you for always  making me do weird things."
    },
    {
      left: "65%",
      top: "24%",
      size: "1rem",
      image: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883187/birthday/106255518_1159193704455424_7795427209675351449_n_x1nmkl.jpg",
      caption: "Morvi 2.0",
      message: "Because of you now I have to deal with another morvi"
    },
    {
      left: "92%",
      top: "10%",
      size: "1rem",
      image: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883208/birthday/107513303_604960483487173_152626338119217882_n_oknnoa.jpg",
      caption: "Ye dooriyan",
      message: "You make long distance friendship look easy."
    },
    {
      left: "72%",
      top: "4%",
      size: "1.1rem",
      image: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883199/birthday/107337742_600464383934960_4202012603097098498_n_rtcyef.jpg",
      caption: "Beam scale",
      message: "You balance us"
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
      image: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883197/birthday/106719813_2881879458605977_8594801144803798572_n_dekszx.jpg",
      caption: "Queens",
      message: "Gosh I won't have been able to keep up his dramas if you weren't here."
    },
    {
      left: "15%",
      top: "15%",
      size: "1.1rem",
      image: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883197/birthday/106562185_147200500273765_7680312854814611611_n_ax9ix8.jpg",
      caption: "Sky is Blue",
      message: "Being in the blue city and looking at it from a higher ground is a totally different thing papa."
    },
    {
      left: "40%",
      top: "20%",
      size: "0.7rem",
      image: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883197/birthday/106709539_159168475728497_4283207542150505844_n_njq5vn.jpg",
      caption: "Imma Cheerful",
      message: "How can you possibly cheer anybody and everybody up ?"
    },
    {
      left: "87%",
      top: "48%",
      size: "0.9rem",
      image: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883196/birthday/106701455_297519694634870_5421475108813589718_n_v3hgja.jpg",
      caption: "Cell mates ah?",
      message: "Neha let's go study in my institute and then go to mall at 9 in the morning."
    },
    {
      left: "28%",
      top: "35%",
      size: "0.7rem",
      image: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883196/birthday/106606131_632850590656765_3947038971770078240_n_pep7gj.jpg",
      caption: "32nd Avenue",
      message: "Neha- let's go rest back in the house /nMorvi- you have to check out 32nd Avenue /n Thanks for making me not regret."
    },
    {
      left: "40%",
      top: "67%",
      size: "0.7rem",
      image: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883196/birthday/106606131_632850590656765_3947038971770078240_n_pep7gj.jpg",
      caption: "32nd Avenue",
      message: "Neha- let's go rest back in the house /nMorvi- you have to check out 32nd Avenue /n Thanks for making me not regret."
    },
    {
      left: "62%",
      top: "68%",
      size: "0.7rem",
      image: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883196/birthday/106606131_632850590656765_3947038971770078240_n_pep7gj.jpg",
      caption: "32nd Avenue",
      message: "Neha- let's go rest back in the house /nMorvi- you have to check out 32nd Avenue /n Thanks for making me not regret."
    },
    {
      left: "48%",
      top: "88%",
      size: "0.7rem",
      image: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883195/birthday/106551922_173972707489555_8108279195280901436_n_wupgp7.jpg",
      caption: "Need support, Yes Ma'am!",
      message: "Thank you for being my support system through and through."
    },
    {
      left: "87%",
      top: "88%",
      size: "0.7rem",
      image: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883195/birthday/106364544_4007170369353337_4253577705013953919_n_xiekl3.jpg",
      caption: "Thank god for hostel",
      message: "You should always chair your younger ones Morvi"
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
