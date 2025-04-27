import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

interface BreadcrumbsNavigationProps {
  activeCategoryName: string | undefined;
  activeSubcategoryName: string | null;
  activeCategorySlug: string | null;
}
export const BreadcrumbsNavigation = ({
  activeCategoryName,
  activeSubcategoryName,
  activeCategorySlug,
}: BreadcrumbsNavigationProps) => {
  if (!activeCategoryName || activeCategorySlug === "all") return null;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {activeSubcategoryName ? (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link
                  href={`/${activeCategorySlug}`}
                  className="text-xl font-medium underline text-primary"
                >
                  {activeCategoryName}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-primary font-medium text-lg">
              /
            </BreadcrumbSeparator>

            <BreadcrumbItem>
              <BreadcrumbPage className="text-xl font-medium">
                {activeSubcategoryName}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        ) : (
          <BreadcrumbItem>
            <BreadcrumbPage className="text-xl font-medium">
              {activeCategoryName}
            </BreadcrumbPage>
          </BreadcrumbItem>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
