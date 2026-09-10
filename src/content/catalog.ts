import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { path } from "@/i18n/routes";
import {
  projectShapes,
  serviceShapes,
  type ProjectId,
  type ServiceId,
} from "./structure";

export type Service = ReturnType<typeof servicesIn>[number];
export type Project = ReturnType<typeof projectsIn>[number];

export function servicesIn(dict: Dictionary, locale: Locale) {
  return serviceShapes.map((shape) => {
    const text = dict.services.items[shape.id];
    const slug = dict.slugs.services[shape.id];
    return { ...shape, ...text, slug, href: path(locale, "services", slug) };
  });
}

export function projectsIn(dict: Dictionary, locale: Locale) {
  return projectShapes.map((shape) => {
    const text = dict.projects.items[shape.id];
    const slug = dict.slugs.projects[shape.id];
    return {
      ...shape,
      ...text,
      slug,
      href: path(locale, "projects", slug),
      typeLabel: dict.projects.types[shape.type],
    };
  });
}

export const serviceBySlug = (dict: Dictionary, locale: Locale, slug: string) =>
  servicesIn(dict, locale).find((service) => service.slug === slug);

export const projectBySlug = (dict: Dictionary, locale: Locale, slug: string) =>
  projectsIn(dict, locale).find((project) => project.slug === slug);

export const projectMeta = (project: Project) =>
  [project.regio, project.duur, project.year].filter(Boolean).join(" · ");

export const serviceSlugIn = (dict: Dictionary, id: ServiceId) => dict.slugs.services[id];
export const projectSlugIn = (dict: Dictionary, id: ProjectId) => dict.slugs.projects[id];
