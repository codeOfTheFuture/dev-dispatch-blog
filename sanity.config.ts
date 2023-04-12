import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@/sanity/schemas";

const name = "Dev_Dispatch_Blog_Studio";
const title = "Dev Dispatch Blog Studio";
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;
const basePath = "/studio";
const plugins = [deskTool(), visionTool()];
const schema = {
  types: schemaTypes,
};

export default defineConfig({
  name,
  title,
  projectId,
  dataset,
  apiVersion,
  basePath,
  plugins,
  schema,
});
