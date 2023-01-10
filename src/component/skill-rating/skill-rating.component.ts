import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {AnimeInstance, AnimeParams} from 'animejs';
import anime from 'animejs/lib/anime.es';

@Component({
  selector: 'qtprofile-skill-rating',
  templateUrl: './skill-rating.component.html',
  styleUrls: ['./skill-rating.component.scss']
})
export class SkillRatingComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() rate: number;
  @Input() text: string;

  @ViewChild('progressBar') progressBar!: ElementRef;
  @ViewChild('percent') percent!: ElementRef;
  @ViewChild('circle') circle!: ElementRef;

  percentAnimeParams!: AnimeParams;
  circleAnimeParams!: AnimeParams;
  percentAnimeInstance!: AnimeInstance;
  circleAnimeInstance!: AnimeInstance;

  constructor() {
    this.rate = 0;
    this.text = '';
  }

  ngOnInit(): void {
    this.initAnimateOption();
  }

  ngAfterViewInit(): void {
    this.percentAnimeInstance = anime({targets: this.percent.nativeElement, ...this.percentAnimeParams});
    this.circleAnimeInstance = anime({targets: this.circle.nativeElement, ...this.circleAnimeParams});
  }

  ngOnDestroy(): void {
    if (this.percentAnimeInstance) {
      anime.remove(this.percent.nativeElement);
    }
    if (this.circleAnimeInstance) {
      anime.remove(this.circle.nativeElement);
    }
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const scrollPercent = window.scrollY - this.progressBar.nativeElement.offsetTop + window.innerHeight;
    if (scrollPercent > 0 && !this.percentAnimeInstance!.began) {
      this.percentAnimeInstance.play();
      this.circleAnimeInstance.play();
    }
  }

  private initAnimateOption(): void {
    this.percentAnimeParams = {
      width: this.rate + '%',
      easing: 'easeInOutQuad',
      duration: 2000,
      autoplay: false
    };

    this.circleAnimeParams = {
      left: this.rate + '%',
      easing: 'easeInOutQuad',
      duration: 2000,
      autoplay: false
    };
  }
}
