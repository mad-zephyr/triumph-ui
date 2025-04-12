import { DocumentNode, FetchPolicy, OperationVariables } from '@apollo/client';
import { notFound } from 'next/navigation';

import { getClient } from './apolloClient';

export async function getPagesData<T>({
  variables,
  query,
  fetchPolicy = 'no-cache',
}: {
  variables: OperationVariables;
  query: DocumentNode;
  fetchPolicy?: FetchPolicy;
}): Promise<T> {
  try {
    const response = await getClient().query<T>({
      query,
      variables,
      fetchPolicy,
      errorPolicy: 'ignore',
    });

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
