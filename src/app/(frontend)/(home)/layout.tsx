import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <div className="flex-1 bg-[#F4F4F0]">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
