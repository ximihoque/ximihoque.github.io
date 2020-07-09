import { Component, OnInit } from '@angular/core';
// import * as speechCommands from '@tensorflow-models/speech-commands';
@Component({
  selector: 'app-fire',
  templateUrl: './fire.component.html',
  styleUrls: ['./fire.component.css']
})
export class FireComponent implements OnInit {

  stars = [
    {
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883186/birthday/106224792_1765059266988574_3940975817755014596_n_osaq5b.jpg",
      caption: "Sleepy me",
      message: "Morvi- 'I wanted to check how I look when I sleep', /n Neha- in my mind like kumbahkarna"
    },
    {
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883187/birthday/106276261_277589786786323_2822046342580465405_n_g73igd.jpg",
      caption: "Sneaky me",
      message: "Fall in love with me, 101"
    },
    {
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883194/birthday/106478074_199638288062965_5648166488530077737_n_ffmf1x.jpg",
      caption: "Beach Day!!",
      message: "Waves after waves slowly drifting away.....like my life."
    },
    {
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883194/birthday/106478932_673456783381964_276367747334400738_n_pjiguz.jpg",
      caption: "I am Duck, Prove me wrong.",
      message: "Morvi- I am bored Neha /nNeha- do your work /nMorvi- nah"
    },
    {
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883193/birthday/106411978_2867142940078404_8605822912520898775_n_xz7srz.jpg",
      caption: "Ms. Parent",
      message: "How do you manage two 'full of themselves' humans"
    },
    {
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883193/birthday/106470207_3268088106582216_7381182328939187968_n_uhr8ws.jpg",
      caption: "Guess what?",
      message: "Right before a cake was thrown at Mona's face."
    },
    {
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883192/birthday/106401442_795507484320560_4789485974444388992_n_hylmiy.jpg",
      caption: "Sorry, Am I making you uncomfortable?",
      message: "One of those thousands photograph where I am uncomfortable and you have the broadest smile"
    },
    {
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883191/birthday/106420430_323031562160736_6398620546248851439_n_g2q8ep.jpg",
      caption: "Travel buddies",
      message: "I vividly remember us puking the whole time we were traveling."
    },
    {
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883190/birthday/106361057_111618343801187_9124202746742042089_n_irro18.jpg",
      caption: "Water water, in my hair",
      message: "When you suggested we should stay near a water park..I think that was the best decision you ever made."
    },
    {
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883190/birthday/106397189_614879112468853_4425240855995923403_n_tjltwl.jpg",
      caption: "Wow me",
      message: "I am pretty sure if I smacked the stupid out of you there wouldn't be anything left."
    },
    {
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883190/birthday/106292265_280713319842448_6009672597799008401_n_irmhxx.jpg",
      caption: "I am my Smile",
      message: "'After class' hot chocolate will always seem like a precious idea."
    },
    {
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883189/birthday/106380042_266450617920650_5053843182880595836_n_mshx1t.jpg",
      caption: "You have got a friend in me",
      message: "'She is a part of me' - mom"
    },
    {
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883189/birthday/106362048_2412346225730915_7067094492768807505_n_ifplwg.jpg",
      caption: "Son Pari",
      message: "You have the power to look like the antagonist of son pari (fyi her name was kaali pari)"
    },
    {
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883189/birthday/106266354_737885673691880_6546254536044853983_n_zdsrbg.jpg",
      caption: "Its blue blue blue",
      message: "'I want to come here in day time 😭😡'"
    },
    {
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883188/birthday/106277947_831873127342376_787850818941560365_n_mw2xei.jpg",
      caption: "They have to",
      message: "How do they put up with you?"
    },
    {
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883187/birthday/106271944_266384517922524_3925634734689576489_n_p7xkxg.jpg",
      caption: "This is it.",
      message: "Morvi- are you kidding me another blur photograph /n Neha- then stop making such atrocious poses laughing like it was the end of world"
    },
    {
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883185/birthday/106152872_713799459167410_1790251744140314882_n_krfb2d.jpg",
      caption: "Morvi is always on phone",
      message: "The only thing I want monotonous in my life is the time I spent being naive and laughing with you 💕"
    },
    
    {
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883194/birthday/106478595_981389225631630_8542854557189072864_n_bp5z3m.jpg",
      caption: "I look good in bindi, hanna ?!!",
      message: "You wore this on our first video call"
    },
    {
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883204/birthday/107257175_2720023084886457_826086073716824310_n_b3cc5w.jpg",
      caption: "So how do you like that?",
      message: "Morvi- don't you dare post it bitch /n Neha- muhahahahha"
    },
    {
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883192/birthday/106424490_311370023334413_1106514445620036987_n_jzdefv.jpg",
      caption: "Mona lisa it seems",
      message: "I am a painting, and I love it"
    },
    {
      imgage: "https://res.cloudinary.com/dz25nxnkr/image/upload/v1593883183/birthday/106132214_298325024626231_6845700539903844406_n_qbxi6a.jpg",
      caption: "Ohhhh...",
      message: "Now I got it.."
    }
  ]
















  cardContent = [];


  party = false;

  // async startListening() {

  //   // When calling `create()`, you must provide the type of the audio input.
  //   // The two available options are `BROWSER_FFT` and `SOFT_FFT`.
  //   // - BROWSER_FFT uses the browser's native Fourier transform.
  //   // - SOFT_FFT uses JavaScript implementations of Fourier transform
  //   //   (not implemented yet).
  //   let recognizer: speechCommands.SpeechCommandRecognizer;

  //   recognizer = speechCommands.create('BROWSER_FFT');

  //   // Make sure that the underlying model and metadata are loaded via HTTPS
  //   // requests.
  //   await recognizer.ensureModelLoaded();

  //   // See the array of words that the recognizer is trained to recognize.
  //   console.log(recognizer.wordLabels());

  //   // `listen()` takes two arguments:
  //   // 1. A callback function that is invoked anytime a word is recognized.
  //   // 2. A configuration object with adjustable fields such a
  //   //    - includeSpectrogram
  //   //    - probabilityThreshold
  //   //    - includeEmbedding
  //   recognizer.listen(async (result: any) => {
  //     // - result.scores contains the probability scores that correspond to
  //     //   recognizer.wordLabels().
  //     // - result.spectrogram contains the spectrogram of the recognized word.
  //     console.log(result);
  //   }, {
  //     includeSpectrogram: true,
  //     probabilityThreshold: 0.75
  //   });

  //   // Stop the recognition in 10 seconds.
  //   setTimeout(() => recognizer.stopListening(), 10e3);
  // }

  startParty() {
    console.log(this.party);
    this.party = true;
    console.log(this.party);
    // this.startListening();

  }

  rotate;

  changeContent(f) {
    this.rotate = 'e'
    let id = f.id * 1;
    let r1 = Math.floor(Math.random() * 49);

    setTimeout(() => this.cardContent[id] = this.stars[r1], 1000);
    // setTimeout(() => this.rotate = 'e', 1500);


    // if (id == 0) {
    //   this.rotate = 'a';
    // }
    // if (id == 1) {
    //   this.rotate = 'b';
    // }
    // if (id == 2) {
    //   this.rotate = 'c';
    // }
    // if (id == 3) {
    //   this.rotate = 'd';
    // }

  }

  constructor() { }

  ngOnInit() {
    this.cardContent.push(this.stars[0]);
    this.cardContent.push(this.stars[1]);
    this.cardContent.push(this.stars[2]);
    this.cardContent.push(this.stars[3]);
  }

}
