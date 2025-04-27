import { createLoader, parseAsString } from "nuqs/server";

export const params = {
  minPrice: parseAsString
    .withOptions({
      clearOnDefault: true,
    })
    .withDefault(""),
  maxPrice: parseAsString
    .withOptions({
      clearOnDefault: true,
    })
    .withDefault(""),
};

export const loadProductFilters = createLoader(params);
