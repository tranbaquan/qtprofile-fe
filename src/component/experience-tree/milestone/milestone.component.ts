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
  selector: 'qtprofile-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.scss']
})
export class MilestoneComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() position: MilestonePosition;
  @Input() period: string;
  @Input() primaryColor: string;
  @Input() secondaryColor: string;

  @ViewChild('content') content!: ElementRef;

  contentAnimeParams!: AnimeParams;
  contentAnimeInstance!: AnimeInstance;

  constructor(private elementRef: ElementRef) {
    this.position = 'left';
    this.period = 'now';
    this.primaryColor = '#00a6a7';
    this.secondaryColor = '#f8f8f8';
  }


  ngOnInit(): void {
    this.contentAnimeParams = {
      opacity: 0,
      translateY: '30px',
      easing: 'easeInOutQuad',
      direction: 'reverse',
      duration: 2000,
      autoplay: false
    };
  }

  ngAfterViewInit(): void {
    this.contentAnimeInstance = anime({targets: this.content.nativeElement, ...this.contentAnimeParams});
  }

  ngOnDestroy(): void {
    if (this.contentAnimeInstance) {
      anime.remove(this.content.nativeElement);
    }
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const scrollPercent = window.scrollY - this.elementRef.nativeElement.offsetParent.offsetTop + window.innerHeight;
    if (scrollPercent > 0 && !this.contentAnimeInstance!.began) {
      this.contentAnimeInstance.play();
    }
  }

}

export type MilestonePosition = 'left' | 'right';
