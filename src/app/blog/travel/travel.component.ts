import {Component, OnInit} from '@angular/core';
import {Post} from '../../../model/post';
import {faEarthAsia} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'qtprofile-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {

  posts: Post[] = [];
  faEarth = faEarthAsia;

  constructor() {
  }

  ngOnInit(): void {
    this.posts = [
      {
        id: 'post001',
        name: 'Chua Chan Mountain Trekking',
        description: '',
        createdDate: new Date(),
      },
      {
        id: 'post001',
        name: 'Ta Nang - Phan Dung Trekking',
        description: 'This is desc',
        createdDate: new Date()
      },
      {
        id: 'post001',
        name: 'Ta Nang - Phan Dung Trekking',
        description: '',
        createdDate: new Date()
      },
      {
        id: 'post001',
        name: 'Ta Nang - Phan Dung Trekking',
        description: '',
        createdDate: new Date()
      }
    ];
  }

}
