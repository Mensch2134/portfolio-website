import { sanityFetch } from "@/sanity/live";
import { urlFor } from "@/sanity/image";
import { defineQuery} from "next-sanity";
import { PortableText } from '@portabletext/react';
import Image from "next/image";
import { notFound } from "next/navigation";
import ProjectClient from "./ProjectPage";

const PROJECT_QUERY = defineQuery(`*[
    _type == "project" &&
    slug.current == $slug
  ][0]{
    name,
    image,
    short_description,
    details,
    date,
    youtube_links,
    title_images,
}`);

// Move this into a separate API function or hook
async function getProject(slug) {
  return await sanityFetch({
    query: PROJECT_QUERY,
    params: { slug },
  });
}

export default async function ProjectPage({ params }) {
  const project = await getProject(params.slug);
  if (!project) return notFound();

  return <ProjectClient project={project} />;
}
