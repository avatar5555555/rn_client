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

export type Artist = {
   __typename?: 'Artist';
  id: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  user: User;
  artworks?: Maybe<Array<Artwork>>;
};

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  createdAt: Scalars['Date'];
  emailVerified: Scalars['Boolean'];
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

export enum ArtworkType {
  Vimeo = 'VIMEO',
  Youtube = 'YOUTUBE',
  Image = 'IMAGE'
}

export type Mutation = {
   __typename?: 'Mutation';
  updateArtist: Artist;
  createArtwork: Artwork;
  updateArtwork: Artwork;
  deleteArtwork: Artwork;
  /** @deprecated Use signUp */
  register?: Maybe<AuthResponse>;
  signUp?: Maybe<SignUpResponse>;
  confirmEmail?: Maybe<AuthResponse>;
  signIn?: Maybe<AuthResponse>;
  sendCode?: Maybe<SignUpResponse>;
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


export type MutationSignUpArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationConfirmEmailArgs = {
  email: Scalars['String'];
  code: Scalars['String'];
};


export type MutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSendCodeArgs = {
  email: Scalars['String'];
};

export type ArtistInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  userID: Scalars['String'];
};

export type ArtworkInput = {
  name: Scalars['String'];
  description: Scalars['String'];
  type: ArtworkType;
  source: Scalars['String'];
  thumbnail?: Maybe<Scalars['String']>;
  authorId: Scalars['String'];
};

export type AuthResponse = {
   __typename?: 'AuthResponse';
  user: User;
  token: Scalars['String'];
};

export type SignUpResponse = {
   __typename?: 'SignUpResponse';
  user: User;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type ConfirmEmailMutationVariables = {
  email: Scalars['String'];
  code: Scalars['String'];
};


export type ConfirmEmailMutation = (
  { __typename?: 'Mutation' }
  & { confirmEmail?: Maybe<(
    { __typename?: 'AuthResponse' }
    & Pick<AuthResponse, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'emailVerified'>
    ) }
  )> }
);

export type SendCodeMutationVariables = {
  email: Scalars['String'];
};


export type SendCodeMutation = (
  { __typename?: 'Mutation' }
  & { sendCode?: Maybe<(
    { __typename?: 'SignUpResponse' }
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'emailVerified'>
    ) }
  )> }
);

export type MeQueryVariables = {};


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email'>
  )> }
);

export type SignInMutationVariables = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type SignInMutation = (
  { __typename?: 'Mutation' }
  & { signIn?: Maybe<(
    { __typename?: 'AuthResponse' }
    & Pick<AuthResponse, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'email' | 'emailVerified' | 'id'>
    ) }
  )> }
);

export type SignUpMutationVariables = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type SignUpMutation = (
  { __typename?: 'Mutation' }
  & { signUp?: Maybe<(
    { __typename?: 'SignUpResponse' }
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'emailVerified'>
    ) }
  )> }
);


export const ConfirmEmailDocument = gql`
    mutation confirmEmail($email: String!, $code: String!) {
  confirmEmail(email: $email, code: $code) {
    user {
      id
      email
      emailVerified
    }
    token
  }
}
    `;
export type ConfirmEmailMutationFn = ApolloReactCommon.MutationFunction<ConfirmEmailMutation, ConfirmEmailMutationVariables>;

/**
 * __useConfirmEmailMutation__
 *
 * To run a mutation, you first call `useConfirmEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmEmailMutation, { data, loading, error }] = useConfirmEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useConfirmEmailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ConfirmEmailMutation, ConfirmEmailMutationVariables>) {
        return ApolloReactHooks.useMutation<ConfirmEmailMutation, ConfirmEmailMutationVariables>(ConfirmEmailDocument, baseOptions);
      }
export type ConfirmEmailMutationHookResult = ReturnType<typeof useConfirmEmailMutation>;
export type ConfirmEmailMutationResult = ApolloReactCommon.MutationResult<ConfirmEmailMutation>;
export type ConfirmEmailMutationOptions = ApolloReactCommon.BaseMutationOptions<ConfirmEmailMutation, ConfirmEmailMutationVariables>;
export const SendCodeDocument = gql`
    mutation sendCode($email: String!) {
  sendCode(email: $email) {
    user {
      id
      email
      emailVerified
    }
  }
}
    `;
export type SendCodeMutationFn = ApolloReactCommon.MutationFunction<SendCodeMutation, SendCodeMutationVariables>;

/**
 * __useSendCodeMutation__
 *
 * To run a mutation, you first call `useSendCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendCodeMutation, { data, loading, error }] = useSendCodeMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSendCodeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SendCodeMutation, SendCodeMutationVariables>) {
        return ApolloReactHooks.useMutation<SendCodeMutation, SendCodeMutationVariables>(SendCodeDocument, baseOptions);
      }
export type SendCodeMutationHookResult = ReturnType<typeof useSendCodeMutation>;
export type SendCodeMutationResult = ApolloReactCommon.MutationResult<SendCodeMutation>;
export type SendCodeMutationOptions = ApolloReactCommon.BaseMutationOptions<SendCodeMutation, SendCodeMutationVariables>;
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
export const SignInDocument = gql`
    mutation signIn($email: String!, $password: String!) {
  signIn(email: $email, password: $password) {
    user {
      email
      emailVerified
      id
    }
    token
  }
}
    `;
export type SignInMutationFn = ApolloReactCommon.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        return ApolloReactHooks.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, baseOptions);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = ApolloReactCommon.MutationResult<SignInMutation>;
export type SignInMutationOptions = ApolloReactCommon.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const SignUpDocument = gql`
    mutation signUp($email: String!, $password: String!) {
  signUp(email: $email, password: $password) {
    user {
      id
      email
      emailVerified
    }
  }
}
    `;
export type SignUpMutationFn = ApolloReactCommon.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        return ApolloReactHooks.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, baseOptions);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = ApolloReactCommon.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = ApolloReactCommon.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;