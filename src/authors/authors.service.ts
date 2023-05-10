import { Injectable } from '@nestjs/common';
import { Author } from 'src/graphql.schema';
import { GetAuthorArgs } from './authors.dto';

@Injectable()
export class AuthorsService {
	async findAll(args: GetAuthorArgs): Promise<Author> {
		return {
			id: 1,
			lastName: args.lastName,
			firstName: args.firstName,
		}
	}

	async findOneById(id: number): Promise<Author> {
		return {
			id: id,
			lastName: 'lastName',
			firstName: 'firstName',
			posts: []
		};
	}
}
