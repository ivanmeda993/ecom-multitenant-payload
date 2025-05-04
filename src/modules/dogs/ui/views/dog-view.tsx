"use client";
import { ImageMedia } from "@/components/media/image-media";
import { StarRating } from "@/components/star-rating";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { formatAsCurrency } from "@/lib/format-as-currency";
import { generateTenantsURL } from "@/lib/get-url";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { LinkIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

interface DogViewProps {
  dogId: string;
  tenantSlug: string;
}
export const DogView = ({ dogId, tenantSlug }: DogViewProps) => {
  const trpc = useTRPC();
  const { data: dog } = useSuspenseQuery(
    trpc.dogs.getOne.queryOptions({ id: dogId })
  );
  return (
    <div className="px-4 lg:px-12 py-10 ">
      <div className="border rounded-sm bg-white overflow-hidden">
        <ImageMedia resource={dog.image} className="aspect-[2.5] " />
        <div className="grid grid-cols-1 lg:grid-cols-6">
          <div className="col-span-4">
            <div className="p-6">
              <h1 className="text-4xl font-medium">{dog.name}</h1>
            </div>

            <div className="border-y flex">
              <div className="px-6 py-4 flex items-center justify-center lg:border-r">
                <Link
                  href={`${generateTenantsURL(tenantSlug)}`}
                  className="flex items-center gap-2"
                >
                  {dog.tenant.image && (
                    <ImageMedia
                      resource={dog.tenant.image}
                      className="rofix size-[30px] rounded-full border shrink-0 "
                      size="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 30px"
                    />
                  )}
                  <p>{dog.tenant.name}</p>
                </Link>
              </div>
              <div className="px-6 py-4 flex items-center justify-center border-r">
                <p className="text-base font-medium">
                  {formatAsCurrency(dog.price)}
                </p>
              </div>
              <div className="px-6 py-4 flex items-center justify-center border-r">
                <p className="text-base font-medium">Weeks: {dog.ageInWeeks}</p>
              </div>
              <div className="hidden lg:flex px-6 py-4 items-center justify-center">
                <div className="flex items-center gap-1">
                  <StarRating rating={3} />
                </div>
              </div>
            </div>

            <div className="block lg:hidden px-6 py-4 items-center justify-center border-b">
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-1">
                  <StarRating rating={3} />
                  <p className="text-base font-medium">{5} ratings</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              {dog.description ? (
                <p className="text-base font-medium">{dog.description}</p>
              ) : (
                <p className="text-base font-medium">No description</p>
              )}
            </div>

            <div className="p-6 border-t">
              <h2 className="text-xl font-medium mb-4">Dog Characteristics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Sex:</span>
                    <span className="capitalize">{dog.sex}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Color:</span>
                    <span>{dog.color}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Weight:</span>
                    <span>{dog.weight} kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Date of Birth:</span>
                    <span>
                      {new Date(dog.dateOfBirth).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Microchipped:</span>
                    <span>{dog.microchipped ? "Yes" : "No"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Vaccinated:</span>
                    <span>{dog.vaccinated ? "Yes" : "No"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Pedigree/Papers:</span>
                    <span>{dog.pedigree ? "Yes" : "No"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="border-t lg:border-t-0 lg:border-l h-full">
              <div className="flex flex-col gap-4 p-5 border-b">
                <div className="flex flex-row items-center gap-2">
                  <Button className="flex-1" variant="default">
                    Contact Breeder
                  </Button>
                  <Button className="size-12" disabled={false}>
                    <LinkIcon />
                    <p className="sr-only">Share</p>
                  </Button>
                </div>
                <p className="text-center font-medium">
                  {dog.refundPolicy === "no-refund"
                    ? "No refunds"
                    : `${dog.refundPolicy} money back guarantee`}
                </p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Ratings</h3>
                  <div className="flex items-center gap-x-1 font-medium">
                    <StarIcon className="size-4 fill-black" />
                    <p>({5})</p>
                    <p className="text-base">{5} ratings</p>
                  </div>
                </div>
                <div className="grid grid-cols-[auto_1fr_auto] gap-3 mt-4">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <Fragment key={rating}>
                      <div className="font-medium">
                        {rating} {rating === 1 ? "star" : "stars"}
                      </div>
                      <Progress
                        value={
                          rating === 5
                            ? 100
                            : rating === 4
                              ? 80
                              : rating === 3
                                ? 60
                                : rating === 2
                                  ? 40
                                  : 20
                        }
                      />
                      <div className="font-medium">
                        {rating === 5
                          ? 3
                          : rating === 4
                            ? 1
                            : rating === 3
                              ? 1
                              : 0}
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DogViewSkeleton = () => {
  return (
    <div className="px-4 lg:px-12 py-10 animate-pulse">
      <div className="border rounded-sm bg-white overflow-hidden">
        <div className="aspect-[2.5] bg-gray-200" />
        <div className="grid grid-cols-1 lg:grid-cols-6">
          <div className="col-span-4">
            <div className="p-6">
              <div className="h-10 bg-gray-200 rounded w-3/4" />
            </div>

            <div className="border-y flex">
              <div className="px-6 py-4 flex items-center justify-center lg:border-r flex-1">
                <div className="h-6 bg-gray-200 rounded w-full" />
              </div>
              <div className="px-6 py-4 flex items-center justify-center border-r flex-1">
                <div className="h-6 bg-gray-200 rounded w-full" />
              </div>
              <div className="px-6 py-4 flex items-center justify-center border-r flex-1">
                <div className="h-6 bg-gray-200 rounded w-full" />
              </div>
              <div className="hidden lg:flex px-6 py-4 items-center justify-center flex-1">
                <div className="h-6 bg-gray-200 rounded w-full" />
              </div>
            </div>

            <div className="p-6">
              <div className="h-20 bg-gray-200 rounded w-full" />
            </div>
          </div>

          <div className="col-span-2">
            <div className="border-t lg:border-t-0 lg:border-l h-full">
              <div className="flex flex-col gap-4 p-5 border-b">
                <div className="flex flex-row items-center gap-2">
                  <div className="h-10 bg-gray-200 rounded w-full" />
                  <div className="h-10 bg-gray-200 rounded w-12" />
                </div>
                <div className="h-6 bg-gray-200 rounded w-full" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="h-6 bg-gray-200 rounded w-1/4" />
                  <div className="h-6 bg-gray-200 rounded w-1/4" />
                </div>
                <div className="grid grid-cols-[auto_1fr_auto] gap-3 mt-4">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <Fragment key={rating}>
                      <div className="h-6 bg-gray-200 rounded w-16" />
                      <div className="h-6 bg-gray-200 rounded w-full" />
                      <div className="h-6 bg-gray-200 rounded w-6" />
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
