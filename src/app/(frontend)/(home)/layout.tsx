import { Footer } from "@/modules/home/layout/footer";
import { Navbar, NavbarSkeleton } from "@/modules/home/layout/navbar";
import { SearchFilterServer } from "@/modules/home/search-filters/search-filter-server";
import { HydrateClient, getQueryClient, trpcServer } from "@/trpc/server";
import { Suspense } from "react";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = async ({ children }: LayoutProps) => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpcServer.auth.session.queryOptions());

  return (
    <div className="flex min-h-screen flex-col ">
      <HydrateClient>
        <Suspense fallback={<NavbarSkeleton />}>
          <Navbar />
        </Suspense>
      </HydrateClient>
      <SearchFilterServer />
      <div className="flex-1 bg-[#F4F4F0]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
