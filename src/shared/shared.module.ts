import {NgModule} from '@angular/core';
import {AnimeDirective} from './anime.directive';
import {AnimationLogoComponent} from './animation-logo/animation-logo.component';

@NgModule({
  declarations: [AnimeDirective, AnimationLogoComponent],
  imports: [],
  exports: [AnimeDirective, AnimationLogoComponent],
  providers: []
})
export class SharedModule {
}
