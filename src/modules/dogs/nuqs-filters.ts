import {
  createLoader,
  parseAsArrayOf,
  parseAsString,
  parseAsStringLiteral,
} from "nuqs/server";

export const sortValues = ["curated", "trending", "hot_and_new"] as const;
export const sexValues = ["male", "female", "all"] as const;

export const params = {
  sort: parseAsStringLiteral(sortValues)
    .withDefault("curated")
    .withOptions({
      clearOnDefault: true,
    })
    .withDefault("curated"),
  sex: parseAsStringLiteral(sexValues)
    .withOptions({
      clearOnDefault: true,
    })
    .withDefault("all"),
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
  tags: parseAsArrayOf(parseAsString)
    .withOptions({
      clearOnDefault: true,
    })
    .withDefault([]),
};

export const loadDogFilters = createLoader(params);
