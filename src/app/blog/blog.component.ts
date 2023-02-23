import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {faEarthAsia, faMicrochip} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'qtprofile-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  faEarth = faEarthAsia;
  faMicrochip = faMicrochip;

  breadcrumbItems: MenuItem[] = [];


  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.setupBreadcrumb();
      }
    });
  }

  setupBreadcrumb(): void {
    this.breadcrumbItems = this.router.url.split('/').filter(label => !!label).map(label => {
      return {
        label: label[0].toUpperCase() + label.slice(1),
        routerLink: this.router.url.slice(0, this.router.url.indexOf(label) + label.length)
      };
    });
  }

  ngOnInit(): void {
  }

}
