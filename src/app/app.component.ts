import {Component, HostListener, OnInit} from '@angular/core';
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  menuIcon = faBars;
  closeIcon = faXmark;
  isCollapsed = true;
  isScrolled = false;

  ngOnInit(): void {
    this.isScrolled = !!window.scrollY;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.isScrolled = !!window.scrollY;
  }
}
