import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SearchFilters } from "@/components/search-filters";
import { HydrateClient, prefetch, trpcServer } from "@/trpc/server";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = async ({ children }: LayoutProps) => {
  void prefetch(trpcServer.categories.getMany.queryOptions());

  return (
    <div className="flex min-h-screen flex-col ">
      <Navbar />
      <HydrateClient>
        <SearchFilters />
      </HydrateClient>
      <div className="flex-1 bg-[#F4F4F0]">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
