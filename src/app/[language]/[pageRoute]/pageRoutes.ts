enum PAGE_ROUTE {
  AboutUs,
  Contact,
  Donation,
  Volunteering,
}
/* eslint-disable @typescript-eslint/naming-convention -- Page routes use kebab-case. */

export const enPageRoutes = {
  'about-us': PAGE_ROUTE.AboutUs,
  contact: PAGE_ROUTE.Contact,
  donation: PAGE_ROUTE.Donation,
  volunteering: PAGE_ROUTE.Volunteering,
} as const;

export const huPageRoutes = {
  rolunk: PAGE_ROUTE.AboutUs,
  kapcsolat: PAGE_ROUTE.Contact,
  adomanyozas: PAGE_ROUTE.Donation,
  onkenteskedes: PAGE_ROUTE.Volunteering,
} as const;

/* eslint-enable @typescript-eslint/naming-convention -- The object keys are the page routes. Page routes use kebab-case. */

/*
 * type PageRoutes = Record<
 * (typeof languages)[number],
 * Record<string, keyof typeof enPageRoutes>
 * >;
 */

export const pageRoutes = {
  hu: huPageRoutes,
  en: enPageRoutes,
} as const;

const flattenedPageRoutes = {
  ...enPageRoutes,
  ...huPageRoutes,
};

export const translatePageRoute = (
  pageRoute: keyof typeof flattenedPageRoutes,
) => flattenedPageRoutes[pageRoute];
