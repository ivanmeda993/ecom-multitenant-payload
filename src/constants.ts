export const AUTH_COOKIE = process.env.COOKIE_NAME ?? "";
export const COOKIE_PREFIX = process.env.COOKIE_PREFIX ?? "";

export const DEFAULT_PAGE_LIMIT = 8;

export const MAX_RATING = 5;
export const MIN_RATING = 0;

export const CSS_VARIABLES = {
  breakpoints: {
    "3xl": 1920,
    "2xl": 1536,
    xl: 1280,
    lg: 1024,
    md: 768,
    sm: 640,
  },
};

export const NAVBAR_ITEMS = [
  {
    href: "/",
    children: "Home",
  },
  {
    href: "/about",
    children: "About",
  },
  {
    href: "/contact",
    children: "Contact",
  },
  {
    href: "/features",
    children: "Features",
  },
  {
    href: "/pricing",
    children: "Pricing",
  },
];
