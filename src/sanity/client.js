import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "m6bz8v6f",
  dataset: "production",
  apiVersion: "2024-03-26",
  // unless you have caching for your front end, `useCdn` should be `true` for most production environments
  useCdn: true
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
