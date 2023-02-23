import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogRoutingModule} from './blog-routing.module';
import { TravelComponent } from './travel/travel.component';
import {RippleModule} from 'primeng/ripple';
import {InputTextModule} from 'primeng/inputtext';
import {StyleClassModule} from 'primeng/styleclass';
import { PostsComponent } from './travel/posts/posts.component';
import { PostDetailComponent } from './travel/post-detail/post-detail.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BlogComponent} from './blog.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {GalleriaModule} from 'primeng/galleria';
@NgModule({
  declarations: [
    BlogComponent,
    TravelComponent,
    PostsComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    RippleModule,
    InputTextModule,
    StyleClassModule,
    FontAwesomeModule,
    BreadcrumbModule,
    GalleriaModule
  ]
})
export class BlogModule { }
