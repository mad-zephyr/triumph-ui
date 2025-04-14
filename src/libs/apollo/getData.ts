import { DocumentNode, FetchPolicy, OperationVariables } from '@apollo/client';
import { notFound } from 'next/navigation';

import { getClient } from './apolloClient';

export async function getPagesData<T>({
  variables,
  query,
  // tags = 'tag',
  // fetchPolicy = 'cache-first',
}: {
  variables: OperationVariables;
  query: DocumentNode;
  tags?: string;
  fetchPolicy?: FetchPolicy;
}): Promise<T> {
  try {
    const response = await getClient().query<T>({
      query,
      variables,
      context: {
        arguments: {},
      },
    });

    // fetchPolicy,
    // errorPolicy: 'all',

    if (!response.data) {
      notFound();
    }

    return response.data;
  } catch (e: unknown) {
    if (typeof e === 'undefined') {
    }

    notFound();
  }
}
