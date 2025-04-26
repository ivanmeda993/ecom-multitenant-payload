import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SearchFilterServer } from "@/components/search-filters/search-filter-server";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col ">
      <Navbar />
      <SearchFilterServer />
      <div className="flex-1 bg-[#F4F4F0]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
