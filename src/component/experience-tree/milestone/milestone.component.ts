import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'qtprofile-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.scss']
})
export class MilestoneComponent {

  @Input() position: MilestonePosition;
  @Input() period: string;

  constructor() {
    this.position = 'left';
    this.period = 'now'
  }

}

export type MilestonePosition = 'left' | 'right';
