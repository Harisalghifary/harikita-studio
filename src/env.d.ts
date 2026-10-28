/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** "true" once the site is ready for the public: placeholders are excluded. */
  readonly PUBLIC_SITE_LIVE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}