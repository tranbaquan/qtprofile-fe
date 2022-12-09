import { Component, OnInit } from '@angular/core';
import {
  faSquareFacebook,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'qtprofile-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  facebookIcon = faSquareFacebook;
  linkedinIcon = faLinkedin;
  instagramIcon = faInstagram;

  constructor() {
    // TODO
  }

  ngOnInit(): void {
    // TODO
  }
}
