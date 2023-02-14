import {Component, HostListener, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {AnimeParams} from 'animejs';
import * as anime from 'animejs/lib/anime';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isScrolled = false;
  activeTab: number = 0;


  constructor(private primengConfig: PrimeNGConfig) {

  }

  ngOnInit(): void {
    this.isScrolled = !!window.scrollY;
    this.primengConfig.ripple = true;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.isScrolled = !!window.scrollY;
  }

  goToLink(link: string): void {
    window.open(link, '_blank')?.focus();
  }

  scrollTo(id: string): void {
    document.querySelector(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
