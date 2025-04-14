import { DocumentNode, FetchPolicy, OperationVariables } from '@apollo/client';

import { getClient } from './apolloClient';

export async function fetchRawMetadata<T>({
  variables,
  query,
  fetchPolicy = 'no-cache',
}: {
  variables: OperationVariables;
  query: DocumentNode;
  fetchPolicy?: FetchPolicy;
}): Promise<T | null> {
  try {
    const response = await getClient().query<T>({
      query,
      variables,
      fetchPolicy,
    });

    return response.data;
  } catch (e: unknown) {
    if (typeof e === 'undefined') {
    }
    return null;
  }
}
