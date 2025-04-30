"use client";
import { ImageMedia } from "@/components/media/image-media";
import { Skeleton } from "@/components/ui/skeleton";
import { generateTenantsURL } from "@/lib/get-url";
import type { MediaType } from "@/types";
import { StarIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type DogCardProps = {
  id: string;
  name: string;
  dogImage: MediaType;
  tenantSlug: string;
  authorUsername: string;
  authorAvatar?: MediaType;
  reviewRating: number;
  reviewCount: number;
  price: number;
  age: number;
};
export const DogCard = ({
  dogImage,
  tenantSlug,
  authorUsername,
  authorAvatar,
  reviewCount,
  reviewRating,
  price,
  name,
  id,
  age,
}: DogCardProps) => {
  const router = useRouter();

  const tenantURL = generateTenantsURL(tenantSlug);

  const handleClickAuthor = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();

    router.push(tenantURL);
  };

  return (
    <Link href={`${tenantURL}/dogs/${id}`} prefetch>
      <div className="flex flex-col border rounded-md bg-white overflow-hidden h-full hover:shadow-lg transition-shadow duration-200">
        <ImageMedia
          resource={dogImage}
          priority
          className="aspect-square "
          size="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 384px"
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
            <p className="text-sm font-medium">Age: {age} years</p>
            {reviewCount > 0 && (
              <div className="flex items-center gap-1">
                <StarIcon className="size-3.5 fill-black" />
                <p className="text-sm font-medium">
                  {reviewRating} ({reviewCount})
                </p>
              </div>
            )}
          </div>

          <div
            className="flex items-center gap-2"
            onClick={handleClickAuthor}
            role="button"
          >
            {authorAvatar && (
              <ImageMedia
                resource={authorAvatar}
                className="size-[20px] rounded-full border shrink-0 object-cover"
                size="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20px"
              />
            )}

            <p className="text-md underline font-medium">{authorUsername}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const DogCardSkeleton = () => {
  return (
    <div className="flex flex-col border bg-white overflow-hidden h-full rounded-md">
      {/* Image skeleton */}
      <Skeleton className="w-full aspect-square bg-neutral-200 rounded-none" />

      {/* Content area */}
      <div className="p-4 border-y flex flex-col gap-2 flex-1">
        {/* Dog name */}
        <Skeleton className="h-6 w-full" />
        {/* Price and age row */}
        <div className="flex items-center gap-2 justify-between w-full">
          <Skeleton className="h-5 w-16" /> {/* Price */}
          <Skeleton className="h-5 w-20" /> {/* Age */}
          <Skeleton className="h-5 w-20" /> {/* Rating */}
        </div>
        <Skeleton className="h-6 w-1/4" />
      </div>
    </div>
  );
};