import { Args, Resolver, Query, Mutation, Int } from '@nestjs/graphql';
import { AuthorsService } from './authors.service';
import { Author } from 'src/graphql.schema';
import { PostsService } from 'src/posts/posts.service';

@Resolver('Author')
export class AuthorsResolver {
	constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @Query()
  async author(@Args('id') id: number): Promise<Author> {
    return this.authorsService.findOneById(id);
  }

  @Mutation(returns => Int)
  async upvotePost(@Args({ name: 'postId', type: () => Int }) postId: number): Promise<Number> {
    return this.postsService.upvoteById({ postId });
  }

  // @ResolveField()
  // async posts(@Parent() author) {
  //   const { id } = author;
  //   return this.postsService.findAll({ authorId: id });
  // }
}
