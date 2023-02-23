import { Component, OnInit } from '@angular/core';
import {Post} from '../../../../model/post';

@Component({
  selector: 'qtprofile-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.posts = [
      {
        id: 'post001',
        name: 'Chua Chan Mountain Trekking 1',
        description: '',
        imgUrl: 'assets/images/landing-1.jpg',
        tags: [{
          name: 'travel',
          color: 'green'
        }],
        createdDate: new Date(),
      },
      {
        id: 'post001',
        name: 'Ta Nang - Phan Dung Trekking 2',
        description: 'This is desc',
        imgUrl: 'assets/images/landing-1.jpg',
        tags: [{
          name: 'travel',
          color: 'green'
        }],
        createdDate: new Date()
      },
      {
        id: 'post001',
        name: 'Ta Nang - Phan Dung Trekking 3',
        description: '',
        imgUrl: 'assets/images/landing-1.jpg',
        tags: [{
          name: 'travel',
          color: 'green'
        }],
        createdDate: new Date()
      },
      {
        id: 'post001',
        name: 'Ta Nang - Phan Dung Trekking 4',
        description: '',
        imgUrl: 'assets/images/landing-1.jpg',
        tags: [{
          name: 'travel',
          color: 'green'
        }],
        createdDate: new Date()
      },
      {
        id: 'post001',
        name: 'Ta Nang - Phan Dung Trekking 5',
        description: '',
        imgUrl: 'assets/images/landing-1.jpg',
        tags: [{
          name: 'travel',
          color: 'green'
        }],
        createdDate: new Date()
      }
    ];
  }
}
