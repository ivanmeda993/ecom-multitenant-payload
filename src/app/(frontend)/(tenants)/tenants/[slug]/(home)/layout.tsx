import { TenantsFooter } from "@/modules/tenants/ui/components/footer";
import {
  TenantsNavbar,
  TenantsNavbarSkeleton,
} from "@/modules/tenants/ui/components/navbar";
import { HydrateClient, getQueryClient, trpcServer } from "@/trpc/server";
import { Suspense } from "react";

interface TenantsLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    slug: string;
  }>;
}
const TenantsLayout = async ({ children, params }: TenantsLayoutProps) => {
  const { slug } = await params;
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpcServer.tenants.getOne.queryOptions({ slug })
  );

  return (
    <div className="min-h-screen bg-[#F4F4F0] flex flex-col">
      <HydrateClient>
        <Suspense fallback={<TenantsNavbarSkeleton />}>
          <TenantsNavbar slug={slug} />
        </Suspense>
      </HydrateClient>
      <div className="flex-1">
        <div className="max-w-(--breakpoint-xl) mx-auto">{children}</div>
      </div>
      <TenantsFooter />
    </div>
  );
};

export default TenantsLayout;
