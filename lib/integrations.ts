export type IntegrationConfig = {
  sanity: {
    projectId?: string;
    dataset: string;
  };
};

export function getIntegrationConfig(): IntegrationConfig {
  return {
    sanity: {
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
    },
  };
}
