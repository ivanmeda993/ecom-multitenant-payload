import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SearchFilters } from "@/components/search-filters";
import configPromise from "@payload-config";
import { getPayload } from "payload";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = async ({ children }: LayoutProps) => {
  const payload = await getPayload({ config: configPromise });
  const data = await payload.find({
    collection: "category",
    pagination: false,
    depth: 1,
    where: {
      parent: {
        exists: false,
      },
    },
    sort: "name",
  });

  return (
    <div className="flex min-h-screen flex-col ">
      <Navbar />
      <SearchFilters data={data.docs} />
      <div className="flex-1 bg-[#F4F4F0]">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
