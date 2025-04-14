// import { DocumentNode, HttpLink, OperationVariables } from '@apollo/client';
import { HttpLink } from '@apollo/client';
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from '@apollo/experimental-nextjs-app-support';

// import { print } from 'graphql';
import { getBasePath } from '../helpers';

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    // cache: new InMemoryCache({ resultCaching: false }),
    cache: new InMemoryCache({ resultCaching: true }),
    connectToDevTools: true,
    link: new HttpLink({
      uri: `${getBasePath()}/graphql`,
      headers: {
        'Cache-Control': 'no-cache',
      },
      fetchOptions: {
        next: { revalidate: 60 },
      },

      // you can disable result caching here if you want to
      // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
      // fetchOptions: { cache: "no-store" },
    }),
  });
});

// export const getClient = () => {
//   return {
//     query: async <T>(props: {
//       query: DocumentNode;
//       variables: OperationVariables;
//       tags?: string | string[];
//     }): Promise<{ data: T }> => {
//       const res = await fetch(`${getBasePath()}/graphql`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           query: print(props.query),
//           variables: props.variables,
//         }),
//         // 👇 это добавляет тег в кэш
//         next: {
//           ...(props.tags && {
//             tags: Array.isArray(props.tags) ? props.tags : [props.tags],
//           }),
//         },
//       });

//       const response = (await res.json()) as unknown as Promise<{ data: T }>;

//       return await response;
//     },
//   };
// };
