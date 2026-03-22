export type IntegrationConfig = {
  sanity: {
    projectId?: string;
    dataset: string;
  };
  supabase: {
    url?: string;
    anonKey?: string;
  };
  openai: {
    apiKeyConfigured: boolean;
  };
};

export function getIntegrationConfig(): IntegrationConfig {
  return {
    sanity: {
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'
    },
    supabase: {
      url: process.env.NEXT_PUBLIC_SUPABASE_URL,
      anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    },
    openai: {
      apiKeyConfigured: Boolean(process.env.OPENAI_API_KEY)
    }
  };
}
