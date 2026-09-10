import type { IconKey } from "@/components/icons";

export const serviceIds = [
  "nieuwbouw",
  "verbouwing-en-renovatie",
  "aanbouw-en-uitbouw",
  "badkamer-en-keuken",
  "dakwerk",
  "onderhoud",
] as const;

export type ServiceId = (typeof serviceIds)[number];

export const projectIds = [
  "vrijstaande-woning-veldhoven",
  "totaalrenovatie-jaren-30-woning-utrecht",
  "uitbouw-met-stalen-pui-eindhoven",
  "badkamer-en-keuken-rotterdam",
  "dakrenovatie-hellend-dak-tilburg",
  "vve-onderhoud-24-appartementen-den-haag",
  "bedrijfspand-verbouwd-tot-kantoor-amersfoort",
  "serre-en-tuinkamer-breda",
  "nieuwbouw-bedrijfsloods-helmond",
  "dakkapellen-en-isolatie-nijmegen",
] as const;

export type ProjectId = (typeof projectIds)[number];

export const projectTypeIds = [
  "nieuwbouw",
  "renovatie",
  "aanbouw",
  "badkamer",
  "dak",
  "onderhoud",
] as const;

export type ProjectTypeId = (typeof projectTypeIds)[number];

export type ServiceShape = {
  id: ServiceId;
  icon: IconKey;
  cardImg: string;
  heroImg: string;
  galleryImgs: string[];
};

export const serviceShapes: ServiceShape[] = [
  {
    id: "nieuwbouw",
    icon: "house",
    cardImg: "img_100",
    heroImg: "img_200",
    galleryImgs: ["img_300", "img_301", "img_302"],
  },
  {
    id: "verbouwing-en-renovatie",
    icon: "hammer",
    cardImg: "img_101",
    heroImg: "img_201",
    galleryImgs: ["img_310", "img_311", "img_312"],
  },
  {
    id: "aanbouw-en-uitbouw",
    icon: "expand",
    cardImg: "img_102",
    heroImg: "img_202",
    galleryImgs: ["img_320", "img_321", "img_322"],
  },
  {
    id: "badkamer-en-keuken",
    icon: "bath",
    cardImg: "img_103",
    heroImg: "img_203",
    galleryImgs: ["img_330", "img_331", "img_332"],
  },
  {
    id: "dakwerk",
    icon: "warehouse",
    cardImg: "img_104",
    heroImg: "img_204",
    galleryImgs: ["img_340", "img_341", "img_342"],
  },
  {
    id: "onderhoud",
    icon: "wrench",
    cardImg: "img_105",
    heroImg: "img_205",
    galleryImgs: ["img_350", "img_351", "img_352"],
  },
];

export type ProjectShape = {
  id: ProjectId;
  type: ProjectTypeId;
  year: string;
  imgAfter: string;
  imgBefore: string;
};

export const projectShapes: ProjectShape[] = [
  {
    id: "vrijstaande-woning-veldhoven",
    type: "nieuwbouw",
    year: "2025",
    imgAfter: "img_400",
    imgBefore: "img_500",
  },
  {
    id: "totaalrenovatie-jaren-30-woning-utrecht",
    type: "renovatie",
    year: "2025",
    imgAfter: "img_401",
    imgBefore: "img_501",
  },
  {
    id: "uitbouw-met-stalen-pui-eindhoven",
    type: "aanbouw",
    year: "2026",
    imgAfter: "img_402",
    imgBefore: "img_502",
  },
  {
    id: "badkamer-en-keuken-rotterdam",
    type: "badkamer",
    year: "2026",
    imgAfter: "img_403",
    imgBefore: "img_503",
  },
  {
    id: "dakrenovatie-hellend-dak-tilburg",
    type: "dak",
    year: "2025",
    imgAfter: "img_404",
    imgBefore: "img_504",
  },
  {
    id: "vve-onderhoud-24-appartementen-den-haag",
    type: "onderhoud",
    year: "2025",
    imgAfter: "img_405",
    imgBefore: "img_505",
  },
  {
    id: "bedrijfspand-verbouwd-tot-kantoor-amersfoort",
    type: "renovatie",
    year: "2025",
    imgAfter: "img_406",
    imgBefore: "img_506",
  },
  {
    id: "serre-en-tuinkamer-breda",
    type: "aanbouw",
    year: "2026",
    imgAfter: "img_407",
    imgBefore: "img_507",
  },
  {
    id: "nieuwbouw-bedrijfsloods-helmond",
    type: "nieuwbouw",
    year: "2025",
    imgAfter: "img_408",
    imgBefore: "img_508",
  },
  {
    id: "dakkapellen-en-isolatie-nijmegen",
    type: "dak",
    year: "2026",
    imgAfter: "img_409",
    imgBefore: "img_509",
  },
];

export const serviceShape = (id: ServiceId) =>
  serviceShapes.find((service) => service.id === id);

export const projectShape = (id: ProjectId) =>
  projectShapes.find((project) => project.id === id);
