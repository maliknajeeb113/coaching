import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "dubb62l9",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});