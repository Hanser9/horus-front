import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateUser: Users;
  UpdateUser: Users;
};


export type MutationCreateUserArgs = {
  variables: UserInput;
};


export type MutationUpdateUserArgs = {
  fields: UserUpdateInput;
  id: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  GetUsers: Array<Users>;
  ping: Scalars['String'];
};

export type UserInput = {
  active: Scalars['Boolean'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  pass: Scalars['String'];
  user_name: Scalars['String'];
  user_type: Type_User;
};

export type UserUpdateInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  pass?: InputMaybe<Scalars['String']>;
  user_name?: InputMaybe<Scalars['String']>;
  user_type?: InputMaybe<Type_User>;
};

export type Users = {
  __typename?: 'Users';
  active: Scalars['Boolean'];
  create_date: Scalars['String'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  pass: Scalars['String'];
  user_id: Scalars['Float'];
  user_name: Scalars['String'];
  user_type: Scalars['String'];
};

/** User Role */
export enum Type_User {
  Admin = 'ADMIN',
  Root = 'ROOT',
  User = 'USER'
}

export type UsersFragmentFragment = { __typename?: 'Users', user_id: number, user_name: string, first_name: string, last_name: string, create_date: string, active: boolean, user_type: string, email: string, pass: string };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', GetUsers: Array<{ __typename?: 'Users', user_id: number, user_name: string, first_name: string, last_name: string, create_date: string, active: boolean, user_type: string, email: string, pass: string }> };

export type CreateUserMutationVariables = Exact<{
  user_name: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  active: Scalars['Boolean'];
  email: Scalars['String'];
  pass: Scalars['String'];
  user_type: Type_User;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', CreateUser: { __typename?: 'Users', user_id: number, user_name: string, first_name: string, last_name: string, create_date: string, active: boolean, user_type: string, email: string, pass: string } };

export const UsersFragmentFragmentDoc = gql`
    fragment UsersFragment on Users {
  user_id
  user_name
  first_name
  last_name
  create_date
  active
  user_type
  email
  pass
}
    `;
export const GetUsersDocument = gql`
    query GetUsers {
  GetUsers {
    ...UsersFragment
  }
}
    ${UsersFragmentFragmentDoc}`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($user_name: String!, $first_name: String!, $last_name: String!, $active: Boolean!, $email: String!, $pass: String!, $user_type: type_user!) {
  CreateUser(
    variables: {user_name: $user_name, first_name: $first_name, last_name: $last_name, active: $active, email: $email, pass: $pass, user_type: $user_type}
  ) {
    ...UsersFragment
  }
}
    ${UsersFragmentFragmentDoc}`;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      user_name: // value for 'user_name'
 *      first_name: // value for 'first_name'
 *      last_name: // value for 'last_name'
 *      active: // value for 'active'
 *      email: // value for 'email'
 *      pass: // value for 'pass'
 *      user_type: // value for 'user_type'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;