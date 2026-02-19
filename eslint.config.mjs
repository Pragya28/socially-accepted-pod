import studio from '@sanity/eslint-config-studio';
import { globals } from 'eslint-plugin-globals';

export default [
  ...studio,
  {
    name: 'node-globals',
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
