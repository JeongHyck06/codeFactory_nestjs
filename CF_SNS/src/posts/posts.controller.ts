import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';

interface PostModel {
  id: number;
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

let posts: PostModel[] = [
  {
    id: 1,
    author: 'newjeans_official',
    title: '뉴진스',
    content: '메이크업 고치고 있는 민지',
    likeCount: 100000,
    commentCount: 999999,
  },
  {
    id: 2,
    author: 'newjeans_official',
    title: '뉴진스',
    content: '노래 연습하고 있는 민지',
    likeCount: 100000,
    commentCount: 999999,
  },
  {
    id: 3,
    author: 'newjeans_official',
    title: '뉴진스',
    content: '노래 연습하고 있는 다니엘',
    likeCount: 100000,
    commentCount: 999999,
  },
];
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Get()
  getPosts() {
    return posts;
  }

  @Get(':id')
  getPost(@Param('id') id: string) {
    return posts.find((post) => {
      return post.id === +id;
    });
  }
}
