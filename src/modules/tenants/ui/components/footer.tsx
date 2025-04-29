import { Logo } from "@/components/logo";

export const TenantsFooter = () => {
  return (
    <footer className=" border-t font-medium bg-white">
      <div className="max-w-(--breakpoint-xl) mx-auto flex  items-center h-full px-4 py-6 lg:px-12 gap-2">
        <p>Powered by</p>
        <Logo />
      </div>
    </footer>
  );
};
