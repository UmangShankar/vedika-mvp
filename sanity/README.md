# Vedika MVP content model notes

This schema set is designed for a founder-editor workflow:

- **Topic/Text/Glossary/SourceRef** are the core graph so editorial pages can link to concepts, canonical texts, and citations without duplication.
- **Guide** and **Essay** sit on top of that graph and can reference topics, texts, and source refs for frontend internal linking.
- **Comparison** supports side-by-side editorial analysis with explicit references and required source support.
- **Site Settings** centralizes brand, nav, and SEO defaults for frontend hydration.

To wire this in Sanity Studio, import `schemaTypes` from `sanity/schemaTypes/index.ts` inside your Studio `schema` config.
