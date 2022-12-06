import {Component, OnInit} from '@angular/core';
import * as brand from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'qtprofile-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  facebookIcon = brand.faSquareFacebook;
  linkedinIcon = brand.faLinkedin;
  instagramIcon = brand.faInstagram;
  constructor() {
  }

  ngOnInit(): void {
  }

}
