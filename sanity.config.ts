import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@/sanity/schemas";
import { myTheme } from "./theme";
import StudioNavbar from "./components/StudioNavbar";
import Logo from "./components/Logo";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

const name = "Dev_Dispatch_Blog_Studio";
const title = "Dev Dispatch Blog Studio";
const basePath = "/studio";
const plugins = [deskTool(), visionTool()];
const schema = {
  types: schemaTypes,
};
const studio = {
  components: {
    logo: Logo,
    navbar: StudioNavbar,
  },
};
const theme = myTheme;

export default defineConfig({
  name,
  title,
  projectId,
  dataset,
  apiVersion,
  basePath,
  plugins,
  schema,
  studio,
  theme,
});
