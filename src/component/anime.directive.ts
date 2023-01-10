import {Directive, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {AnimeInstance, AnimeParams} from 'animejs';
import anime from 'animejs/lib/anime.es';

@Directive({
  selector: '[qtprofileAnime]'
})
export class AnimeDirective implements OnChanges, OnDestroy {

  @Input() animeParams: AnimeParams;
  private animeInstance: AnimeInstance;

  constructor(private elementRef: ElementRef) {
    this.animeParams = {};
    this.animeInstance = null!;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if ('animeParams' in changes) {
      this.dispose();
      this.animeInstance = anime({
        targets: this.elementRef.nativeElement,
        ...this.animeParams
      });
    }
  }

  ngOnDestroy(): void {
    this.dispose();
  }

  private dispose(): void {
    if (this.animeInstance) {
      anime.remove(this.elementRef.nativeElement);
      this.animeInstance = null!;
    }
  }
}
