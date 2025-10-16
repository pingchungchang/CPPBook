// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import expressiveCode from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://pingchungchang.github.io',
  base: 'CPPBook',

  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },

  integrations: [expressiveCode({
      plugins: [pluginLineNumbers()], // add pluginLineNumbers() plugin
      defaultProps: {
          showLineNumbers: true, // set true to show line number by default
      }
  }), mdx()],
});