import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @ViewChild('videoPlayer') videoplayer: ElementRef;
  @ViewChild('video') video: ElementRef;

  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }

  videoArray = ['https://www.youtube.com/embed/1TTDR1mkWLY?controls=0&rel=0', 'https://www.youtube.com/embed/tgbNymZ7vqY?controls=0&rel=0', 'https://www.youtube.com/embed/lJIrF4YjHfQ?controls=0&rel=0'];
  changeVideo(val) {
    this.video.nativeElement.src = this.videoArray[val];
  }

  constructor() {

  }

  light() {
    // alert("light");
  }


  ngOnInit() {
  }

}
