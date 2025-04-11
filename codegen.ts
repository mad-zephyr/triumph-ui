import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:1337/graphql',
  documents: ['src/**/*.ts'],
  generates: {
    './src/libs/graphql/gql/': {
      preset: 'client',
      presetConfig: {
        fragmentMasking: false,
      },
    },
    './src/types/types.ts': {
      plugins: ['typescript', 'typescript-operations'],
      config: {
        namingConvention: {
          typeNames: (name: string) =>
            `G${name.charAt(0).toUpperCase()}${name.slice(1)}`,
        },
      },
    },
  },
  hooks: {
    afterAllFileWrite: 'prettier --write',
  },
  config: {
    withHOC: false,
    withComponent: true,
    withHooks: false,
  },
};

export default config;
