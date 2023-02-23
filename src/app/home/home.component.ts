import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'qtprofile-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isScrolled = false;
  activeTab: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.isScrolled = !!window.scrollY;
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
