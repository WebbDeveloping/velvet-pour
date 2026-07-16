export const PACKAGES = [
  {
    id: "bws",
    title: "Beer, Wine & Soda",
    body: "Crowd-pleasing beers, wines, and soft drinks — a clean, refreshing lineup that keeps the celebration going without fuss.",
    image:
      "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "signature",
    title: "Signature Sips",
    body: "Everything in Beer, Wine & Soda, plus two custom cocktails designed around your theme, colors, or couple story.",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "essentials",
    title: "Essentials Bar",
    body: "A complete open-bar feel: spirits, mixers, beer, wine, and soda — the flexible middle ground for most celebrations.",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "luxe",
    title: "Luxe Bar",
    body: "Built like Essentials, with upgraded, top-shelf brands that bring a little extra polish to the pour.",
    image:
      "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=400&q=80",
    popular: true,
  },
  {
    id: "opulent",
    title: "Opulent Bar",
    body: "Reserved for hosts who want the finest labels only — a truly elevated pour from first toast to last call.",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "brunch",
    title: "Brunch Bar",
    body: "Bubbly, juices, and the spirits you need for mimosas, Bloody Marys, and brunch classics — including our Breakfast Martini.",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=400&q=80",
  },
] as const;

export type PackageId = (typeof PACKAGES)[number]["id"];

export const PACKAGE_IDS = PACKAGES.map((pkg) => pkg.id);

export function isPackageId(value: string): value is PackageId {
  return (PACKAGE_IDS as readonly string[]).includes(value);
}

export function getPackageTitle(id: PackageId): string {
  const pkg = PACKAGES.find((item) => item.id === id);
  return pkg?.title ?? id;
}
