import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
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
    const post = posts.find((post) => post.id === +id);

    if (!post) {
      throw new NotFoundException();
    }
    return post;
  }

  @Post()
  PostPost(
    @Body('author') author: string,
    @Body('title') title: string,
    @Body('content') content: string,
  ) {
    const post = {
      id: posts[posts.length - 1].id + 1,
      author,
      title,
      content,
      likeCount: 0,
      commentCount: 0,
    };

    posts = [...posts, post];

    return posts;
  }
}
