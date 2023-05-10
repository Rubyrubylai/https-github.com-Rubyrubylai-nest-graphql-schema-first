import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
	async upvoteById(postData): Promise<number> {
		return postData.postId
	}
}
