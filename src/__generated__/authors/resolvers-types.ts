export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Author = {
  __typename?: 'Author';
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  lastName?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<Post>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  upvotePost?: Maybe<Scalars['Int']>;
};


export type MutationUpvotePostArgs = {
  postId: Scalars['Int'];
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['Int'];
  title: Scalars['String'];
  votes?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  author?: Maybe<Author>;
};


export type QueryAuthorArgs = {
  id: Scalars['Int'];
};
