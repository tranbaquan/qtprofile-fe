import {Component, QueryList, ViewChildren} from '@angular/core';
import {MilestoneComponent} from './milestone/milestone.component';

@Component({
  selector: 'qtprofile-experience-tree',
  templateUrl: './experience-tree.component.html',
  styleUrls: ['./experience-tree.component.scss']
})
export class ExperienceTreeComponent {

  @ViewChildren(MilestoneComponent) milestones!: QueryList<MilestoneComponent>
  now = Date.now();
  showCurrentDate = false;

  onNowEnter(): void {
    this.now = Date.now();
    this.showCurrentDate = true;
  }

  onNowLeave() {
    this.showCurrentDate = false;
  }

}
