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
import dynamic from "next/dynamic";
import Link from "next/link";
import { Fragment } from "react";

const CartButton = dynamic(
  () => import("../components/cart-button").then((mod) => mod.CartButton),
  {
    ssr: false,
    loading: () => (
      <Button className="flex-1 h-12" disabled>
        Loading...
      </Button>
    ),
  }
);

interface ProductViewProps {
  productId: string;
  tenantSlug: string;
}
export const ProductView = ({ productId, tenantSlug }: ProductViewProps) => {
  const trpc = useTRPC();
  const { data: product } = useSuspenseQuery(
    trpc.products.getOne.queryOptions({ id: productId })
  );
  return (
    <div className="px-4 lg:px-12 py-10 ">
      <div className="border rounded-sm bg-white overflow-hidden">
        {/*<div className="relative aspect-[2.5] border-b">*/}
        <ImageMedia resource={product.image} className="aspect-[2.5] " />
        {/*</div>*/}
        <div className="grid grid-cols-1 lg:grid-cols-6">
          <div className="col-span-4">
            <div className="p-6">
              <h1 className="text-4xl font-medium">{product.name}</h1>
            </div>

            <div className="border-y flex">
              <div className="px-6 py-4 flex items-center justify-center lg:border-r">
                <Link
                  href={`${generateTenantsURL(tenantSlug)}`}
                  className="flex items-center gap-2"
                >
                  {product.tenant.image && (
                    <ImageMedia
                      resource={product.tenant.image}
                      className="rofix size-[30px] rounded-full border shrink-0 "
                      size="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 30px"
                    />
                  )}
                  <p>{product.tenant.name}</p>
                </Link>
              </div>
              <div className="px-6 py-4 flex items-center justify-center border-r">
                <p className="text-base font-medium">
                  {formatAsCurrency(product.price)}
                </p>
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
              {product.description ? (
                <p className="text-base font-medium">{product.description}</p>
              ) : (
                <p className="text-base font-medium">No description</p>
              )}
            </div>
          </div>

          <div className="col-span-2">
            <div className="border-t lg:border-t-0 lg:border-l h-full">
              <div className="flex flex-col gap-4 p-5 border-b">
                <div className="flex flex-row items-center gap-2">
                  <CartButton productId={productId} tenantSlug={tenantSlug} />
                  <Button className="size-12" disabled={false}>
                    <LinkIcon />
                    <p className="sr-only">Share</p>
                  </Button>
                </div>
                <p className="text-center font-medium">
                  {product.refundPolicy === "no-refund"
                    ? "No refunds"
                    : `${product.refundPolicy} money back guarantee`}
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
                      <Progress value={rating} className="h-[1lh]" />
                      <div className="font-medium">{0}%</div>
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
