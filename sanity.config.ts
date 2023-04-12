import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@/sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

export default defineConfig({
  name: "Dev_Dispatch_Blog_Studio",
  title: "Dev Dispatch Blog Studio",
  projectId,
  dataset,
  apiVersion,
  basePath: "/studio",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
