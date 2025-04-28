import { ImageMedia } from "@/components/media/image-media";
import { Skeleton } from "@/components/ui/skeleton";
import type { MediaType } from "@/types";
import { StarIcon } from "lucide-react";
import Link from "next/link";

type ProductCardProps = {
  id: string;
  name: string;
  productImage: MediaType;
  authorUsername: string;
  authorAvatar?: MediaType;
  reviewRating: number;
  reviewCount: number;
  price: number;
};
export const ProductCard = ({
  productImage,
  authorUsername,
  authorAvatar,
  reviewCount,
  reviewRating,
  price,
  name,
  id,
}: ProductCardProps) => {
  return (
    <Link href={`/products/${id}}`}>
      <div className="flex flex-col border rounded-md bg-white overflow-hidden h-full hover:shadow-lg transition-shadow duration-200">
        <ImageMedia
          resource={productImage}
          className="h-full w-full aspect-square object-cover"
        />
        <div className="p-4 border-y flex flex-col gap-2 flex-1">
          <h2 className="text-lg font-medium line-clamp-4">{name}</h2>
          <div className="flex items-center gap-2 justify-between w-full">
            <p className="text-sm font-medium ">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }).format(price)}
            </p>
            {reviewCount > 0 && (
              <div className="flex items-center gap-1">
                <StarIcon className="size-3.5 fill-black" />
                <p className="text-sm font-medium">
                  {reviewRating} ({reviewCount})
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            {authorAvatar && (
              <ImageMedia
                resource={authorAvatar}
                fill
                className="size-[16px] rounded-full border shrink-0"
              />
            )}

            <p className="text-sm underline font-medium">{authorUsername}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const ProductCardSkeleton = () => {
  return (
    <div className="flex flex-col border bg-white overflow-hidden h-full rounded-lg">
      {/* Image skeleton */}
      <Skeleton className="w-full aspect-square bg-neutral-200" />

      {/* Content area */}
      <div className="p-4 border-y flex flex-col gap-2 flex-1">
        {/* Product name */}
        <Skeleton className="h-6 w-full" />
        {/* Price and rating row */}
        <div className="flex items-center gap-2 justify-between w-full">
          <Skeleton className="h-5 w-16" /> {/* Price */}
          <Skeleton className="h-5 w-20" /> {/* Rating */}
        </div>
        <Skeleton className="h-6 w-1/4" />
      </div>
    </div>
  );
};
