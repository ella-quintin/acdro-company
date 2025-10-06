import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: '22hj55di',
  dataset: 'production',
apiVersion: '2025-10-04',
  useCdn: true,
});
