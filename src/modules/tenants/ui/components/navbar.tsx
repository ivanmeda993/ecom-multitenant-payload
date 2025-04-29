"use client";
import { ImageMedia } from "@/components/media/image-media";
import { Button } from "@/components/ui/button";
import { generateTenantsURL } from "@/lib/get-url";
import { CheckoutButton } from "@/modules/checkout/ui/components/checkout-button";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { LoaderIcon } from "lucide-react";
import Link from "next/link";

interface TenantsNavbarProps {
  slug: string;
}
export const TenantsNavbar = ({ slug }: TenantsNavbarProps) => {
  const trpcClient = useTRPC();
  const { data } = useSuspenseQuery(
    trpcClient.tenants.getOne.queryOptions({ slug })
  );
  return (
    <nav className="h-20 border-b font-medium bg-white">
      <div className="max-w-(--breakpoint-xl) mx-auto flex justify-between items-center h-full px-4 lg:px-12">
        <Link
          href={generateTenantsURL(slug)}
          className="flex items-center gap-2"
        >
          {data.image && (
            <ImageMedia
              resource={data.image}
              className="rounded-full border shrink-0 size-[32px]"
              priority
            />
          )}
          <p className="text-xl">{data.name}</p>
        </Link>
        <CheckoutButton tenantSlug={slug} hideIfEmpty />
      </div>
    </nav>
  );
};

export const TenantsNavbarSkeleton = () => {
  return (
    <nav className="h-20 border-b font-medium bg-white">
      <div className="max-w-(--breakpoint-xl) mx-auto flex justify-between items-center h-full px-4 lg:px-12">
        <div />
        <Button className="size-12" disabled>
          <LoaderIcon className="animate-spin" size={16} />
        </Button>
      </div>
    </nav>
  );
};
