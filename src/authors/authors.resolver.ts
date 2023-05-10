import { Args, Resolver, Query } from '@nestjs/graphql';
import { AuthorsService } from './authors.service';
import { Author } from 'src/graphql.schema';

@Resolver('Author')
export class AuthorsResolver {
	constructor(
    private authorsService: AuthorsService,
    // private postsService: PostsService,
  ) {}

  @Query()
  async author(@Args('id') id: number): Promise<Author> {
    return this.authorsService.findOneById(id);
  }

  // @ResolveField()
  // async posts(@Parent() author) {
  //   const { id } = author;
  //   return this.postsService.findAll({ authorId: id });
  // }
}
