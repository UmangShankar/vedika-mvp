import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemaTypes';

export default defineConfig({
  name: 'vedika',
  title: 'Vedika',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',

  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01' }),
  ],

  schema: {
    types: schemaTypes,
  },
});
