import { createClient } from "next-sanity";
import { config } from "./config";

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token:
    "skGtvaPCryjuiIplkRAhlIOiTWrfVBOlxEkKueIimT8UiZKx9kJ5g06bqry9imIeCBrXDgXVj0ehDoxmq2FxR3wmXwUM69Gn5Fd9j5kTeTgLrXFgriLH5CAJqQRLnh42kkzO6bGPDemzVDsrtvJOhxH3VX41Iq7hi4JQ9RweWApjyxRIzhH4",
});

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview) =>
  usePreview ? previewClient : sanityClient;
