import { Query, Resolver } from '@nestjs/graphql';
import { Post } from './post.model';

// リゾルバの宣言デコレータ？
@Resolver((of) => Post)
export class PostsResolver {
  constructor() {}

  @Query(() => [Post], { name: 'posts', nullable: true })
  async getPosts() {
    return [
      {
        id: '1',
        title: 'Title 1',
      },
      {
        id: '2',
        title: 'Title 2',
      },
    ];
  }
}
