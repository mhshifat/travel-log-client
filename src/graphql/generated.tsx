import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateLogInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  visitedDate: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  latitude: Scalars['String'];
  longitude: Scalars['String'];
};

export type Log = {
  __typename?: 'Log';
  id: Scalars['ID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  visitedDate: Scalars['String'];
  comments: Array<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  rating: Scalars['Int'];
  createdAt: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createLog: Log;
};


export type MutationCreateLogArgs = {
  input: CreateLogInput;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  logs: Array<Log>;
};

export type LogFragmentFragment = (
  { __typename?: 'Log' }
  & Pick<Log, 'id' | 'title' | 'description' | 'visitedDate' | 'comments' | 'image' | 'latitude' | 'longitude' | 'rating' | 'createdAt'>
);

export type CreateLogMutationVariables = Exact<{
  input: CreateLogInput;
}>;


export type CreateLogMutation = (
  { __typename?: 'Mutation' }
  & { createLog: (
    { __typename?: 'Log' }
    & LogFragmentFragment
  ) }
);

export type GetLogsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLogsQuery = (
  { __typename?: 'Query' }
  & { logs: Array<(
    { __typename?: 'Log' }
    & LogFragmentFragment
  )> }
);

export const LogFragmentFragmentDoc = gql`
    fragment LogFragment on Log {
  id
  title
  description
  visitedDate
  comments
  image
  latitude
  longitude
  rating
  createdAt
}
    `;
export const CreateLogDocument = gql`
    mutation CreateLog($input: CreateLogInput!) {
  createLog(input: $input) {
    ...LogFragment
  }
}
    ${LogFragmentFragmentDoc}`;
export type CreateLogMutationFn = ApolloReactCommon.MutationFunction<CreateLogMutation, CreateLogMutationVariables>;
export type CreateLogComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateLogMutation, CreateLogMutationVariables>, 'mutation'>;

    export const CreateLogComponent = (props: CreateLogComponentProps) => (
      <ApolloReactComponents.Mutation<CreateLogMutation, CreateLogMutationVariables> mutation={CreateLogDocument} {...props} />
    );
    
export type CreateLogProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateLogMutation, CreateLogMutationVariables>
    } & TChildProps;
export function withCreateLog<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateLogMutation,
  CreateLogMutationVariables,
  CreateLogProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateLogMutation, CreateLogMutationVariables, CreateLogProps<TChildProps, TDataName>>(CreateLogDocument, {
      alias: 'createLog',
      ...operationOptions
    });
};

/**
 * __useCreateLogMutation__
 *
 * To run a mutation, you first call `useCreateLogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLogMutation, { data, loading, error }] = useCreateLogMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateLogMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateLogMutation, CreateLogMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateLogMutation, CreateLogMutationVariables>(CreateLogDocument, baseOptions);
      }
export type CreateLogMutationHookResult = ReturnType<typeof useCreateLogMutation>;
export type CreateLogMutationResult = ApolloReactCommon.MutationResult<CreateLogMutation>;
export type CreateLogMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateLogMutation, CreateLogMutationVariables>;
export const GetLogsDocument = gql`
    query GetLogs {
  logs {
    ...LogFragment
  }
}
    ${LogFragmentFragmentDoc}`;
export type GetLogsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetLogsQuery, GetLogsQueryVariables>, 'query'>;

    export const GetLogsComponent = (props: GetLogsComponentProps) => (
      <ApolloReactComponents.Query<GetLogsQuery, GetLogsQueryVariables> query={GetLogsDocument} {...props} />
    );
    
export type GetLogsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetLogsQuery, GetLogsQueryVariables>
    } & TChildProps;
export function withGetLogs<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetLogsQuery,
  GetLogsQueryVariables,
  GetLogsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetLogsQuery, GetLogsQueryVariables, GetLogsProps<TChildProps, TDataName>>(GetLogsDocument, {
      alias: 'getLogs',
      ...operationOptions
    });
};

/**
 * __useGetLogsQuery__
 *
 * To run a query within a React component, call `useGetLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLogsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLogsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetLogsQuery, GetLogsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetLogsQuery, GetLogsQueryVariables>(GetLogsDocument, baseOptions);
      }
export function useGetLogsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetLogsQuery, GetLogsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetLogsQuery, GetLogsQueryVariables>(GetLogsDocument, baseOptions);
        }
export type GetLogsQueryHookResult = ReturnType<typeof useGetLogsQuery>;
export type GetLogsLazyQueryHookResult = ReturnType<typeof useGetLogsLazyQuery>;
export type GetLogsQueryResult = ApolloReactCommon.QueryResult<GetLogsQuery, GetLogsQueryVariables>;