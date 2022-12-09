import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'qtprofile-skill-rating',
  templateUrl: './skill-rating.component.html',
  styleUrls: ['./skill-rating.component.scss'],
})
export class SkillRatingComponent implements OnInit {
  @Input() rate: number;
  @Input() text: string;

  constructor() {
    this.rate = 0;
    this.text = '';
  }

  ngOnInit(): void {
    // TODO
  }
}
