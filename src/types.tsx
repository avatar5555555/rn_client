import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Upload: any;
};

export type Artist = {
   __typename?: 'Artist';
  id: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  user: User;
  artworks?: Maybe<Array<Artwork>>;
};

export type ArtistInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  userID: Scalars['String'];
};

export type Artwork = {
   __typename?: 'Artwork';
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  type: ArtworkType;
  source: Scalars['String'];
  thumbnail?: Maybe<Scalars['String']>;
  author: User;
};

export type ArtworkInput = {
  name: Scalars['String'];
  description: Scalars['String'];
  type: ArtworkType;
  source: Scalars['String'];
  thumbnail?: Maybe<Scalars['String']>;
  authorId: Scalars['String'];
};

export enum ArtworkType {
  Vimeo = 'VIMEO',
  Youtube = 'YOUTUBE',
  Image = 'IMAGE'
}

export type AuthResponse = {
   __typename?: 'AuthResponse';
  user: User;
  token: Scalars['String'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type Mutation = {
   __typename?: 'Mutation';
  updateArtist: Artist;
  createArtwork: Artwork;
  updateArtwork: Artwork;
  deleteArtwork: Artwork;
  register?: Maybe<AuthResponse>;
  signIn?: Maybe<AuthResponse>;
};


export type MutationUpdateArtistArgs = {
  input: ArtistInput;
};


export type MutationCreateArtworkArgs = {
  input: ArtworkInput;
};


export type MutationUpdateArtworkArgs = {
  input: ArtworkInput;
};


export type MutationDeleteArtworkArgs = {
  id: Scalars['ID'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
   __typename?: 'Query';
  artist?: Maybe<Artist>;
  artists: Array<Artist>;
  artwork?: Maybe<Artwork>;
  artworks: Array<Artwork>;
  artworksByArtist: Array<Artwork>;
  me?: Maybe<User>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryArtistArgs = {
  id: Scalars['ID'];
};


export type QueryArtworkArgs = {
  id: Scalars['ID'];
};


export type QueryArtworksByArtistArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  createdAt: Scalars['Date'];
};

export type MeQueryVariables = {};


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email'>
  )> }
);


export const MeDocument = gql`
    query Me {
  me {
    id
    email
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;