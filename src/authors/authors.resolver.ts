import { Args, Resolver, Query } from '@nestjs/graphql';
import { AuthorsSerivce } from './authors.service';

@Resolver('Author')
export class AuthorsResolver {
	constructor(
    private authorsService: AuthorsSerivce,
    // private postsService: PostsService,
  ) {}

  @Query()
  async author(@Args('id') id: number) {
    return this.authorsService.findOneById(id);
  }

  // @ResolveField()
  // async posts(@Parent() author) {
  //   const { id } = author;
  //   return this.postsService.findAll({ authorId: id });
  // }
}
