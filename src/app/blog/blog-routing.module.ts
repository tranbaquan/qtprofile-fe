import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TravelComponent} from './travel/travel.component';
import {PostDetailComponent} from './travel/post-detail/post-detail.component';
import {PostsComponent} from './travel/posts/posts.component';
import {BlogComponent} from './blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    title: 'Explore my blog',
    children: [
      {
        path: 'travel',
        component: TravelComponent,
        children: [
          {
            path: '',
            component: PostsComponent
          },
          {
            path: 'post001',
            component: PostDetailComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {
}
