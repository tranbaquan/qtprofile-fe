import {Component, Input, OnInit} from '@angular/core';
import * as anime from 'animejs/lib/anime';
import {AnimeParams} from 'animejs';

@Component({
  selector: 'qtprofile-animation-logo',
  templateUrl: './animation-logo.component.html',
  styleUrls: ['./animation-logo.component.scss']
})
export class AnimationLogoComponent implements OnInit {

  @Input() height: number;

  animeParams: AnimeParams;

  constructor() {
    this.height = 32;
    this.animeParams = {
      targets: 'path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      autoplay: true,
      duration: 1500,
      delay: function (el, i) {
        return i * 250;
      },
      direction: 'alternate',
      loop: true
    };
  }

  ngOnInit(): void {
  }

}
