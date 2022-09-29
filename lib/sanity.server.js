import { createClient } from "next-sanity";
import { config } from "./config";

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token:
    "skAFWK1oEzkhpaTVhVoT4YvEkbBe8GC6CJ5uDALVSPRn6VdtkxjGPHa22lAqSazkJSO6q6WiHkvN75u7xUbB58gYZB6RHy2IFC4kQ0AdMK1hy0BHKAO2c8zkpCGYYGqhFrCALyNJmoEAD3ietR4wFo04utAuO1gnGkJErLMdfGIUnkL1EUoY",
});

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview) =>
  usePreview ? previewClient : sanityClient;
