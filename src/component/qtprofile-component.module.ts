import {NgModule} from '@angular/core';
import {SkillRatingComponent} from './skill-rating/skill-rating.component';
import {ExperienceTreeComponent} from './experience-tree/experience-tree.component';
import {DatePipe} from '@angular/common';
import {MilestoneComponent} from './experience-tree/milestone/milestone.component';
import {AnimeDirective} from './anime.directive';

@NgModule({
  declarations: [SkillRatingComponent, ExperienceTreeComponent, MilestoneComponent, AnimeDirective],
  imports: [
    DatePipe
  ],
  exports: [SkillRatingComponent, ExperienceTreeComponent, MilestoneComponent, AnimeDirective],
  providers: []
})
export class QTProfileComponentModule {
}
