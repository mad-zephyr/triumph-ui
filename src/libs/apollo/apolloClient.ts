import { HttpLink } from '@apollo/client';
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from '@apollo/experimental-nextjs-app-support';

import { getBasePath } from '../helpers';

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache({ resultCaching: false }),
    connectToDevTools: true,
    link: new HttpLink({
      uri: `${getBasePath()}/graphql`,
      headers: {
        'Cache-Control': 'no-cache',
      },
      fetchOptions: {
        next: { revalidate: 0 },
      },

      // you can disable result caching here if you want to
      // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
      // fetchOptions: { cache: "no-store" },
    }),
  });
});
