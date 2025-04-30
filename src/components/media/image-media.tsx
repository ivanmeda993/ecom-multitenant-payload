import type { StaticImageData } from "next/image";

import NextImage from "next/image";
import type React from "react";

import { CSS_VARIABLES } from "@/constants";
import { getClientSideURL } from "@/lib/get-url";
import { cn } from "@/lib/utils";
import type { MediaType } from "@/types";

const { breakpoints } = CSS_VARIABLES;

const placeholderBlur =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAmsB9U3l5jYAAAAASUVORK5CYII=";

export interface Props {
  alt?: string;
  fill?: boolean; // for NextImage only
  loading?: "lazy" | "eager"; // for NextImage only
  priority?: boolean; // for NextImage only
  resource?: MediaType;
  size?: string; // for NextImage only
  src?: StaticImageData; // for static media
  className?: string;
}

export const ImageMedia: React.FC<Props> = (props) => {
  const {
    alt: altFromProps,
    fill,
    className,
    priority,
    resource,
    size: sizeFromProps,
    src: srcFromProps,
    loading: loadingFromProps,
  } = props;

  let width: number | undefined;
  let height: number | undefined;
  let alt = altFromProps;
  let src: StaticImageData | string = srcFromProps || "";

  if (!src && resource && typeof resource === "object") {
    const {
      alt: altFromResource,
      height: fullHeight,
      url,
      width: fullWidth,
    } = resource;

    width = fullWidth!;
    height = fullHeight!;
    alt = altFromResource || "";

    const cacheTag = resource.updatedAt;

    src = `${getClientSideURL()}${url}?${cacheTag}`;
  }

  const loading = loadingFromProps || (priority ? undefined : "lazy");

  // NOTE: this is used by the browser to determine which image to download at different screen sizes
  const sizes = sizeFromProps
    ? sizeFromProps
    : Object.entries(breakpoints)
        .map(([, value]) => `(max-width: ${value}px) ${value * 2}w`)
        .join(", ");

  return (
    <NextImage
      alt={alt || ""}
      className={cn(className)}
      fill={fill}
      height={fill ? undefined : (height ?? 300)}
      placeholder="blur"
      blurDataURL={placeholderBlur}
      priority={priority}
      quality={100}
      loading={loading}
      sizes={sizes}
      src={src}
      width={fill ? undefined : (width ?? 300)}
    />
  );
};
