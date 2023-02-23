import {Tag} from './tag';
import {Creator} from './creator';

export class Post {
  id?: string;
  name?: string;
  description?: string;
  tags?: Tag[] = [];
  creator?: Creator;

  imgUrl?: string;
  createdDate?: Date;

  details?: PostDetail;
}

export class PostDetail {
  imgUrls: string[] = [];
  mediaUrls: string[] = [];
}
