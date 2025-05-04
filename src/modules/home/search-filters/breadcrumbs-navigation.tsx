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
  activeBreedSlug: string | undefined;
  activeBreedName: string | null;
  activeSubBreedName: string | null;
}
export const BreadcrumbsNavigation = ({
  activeBreedSlug,
  activeBreedName,
  activeSubBreedName,
}: BreadcrumbsNavigationProps) => {
  if (!activeBreedName || activeBreedSlug === "all") return null;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {activeSubBreedName ? (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href={`/${activeBreedSlug}`}
                  className="text-xl font-medium underline text-primary"
                >
                  {activeBreedName}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-primary font-medium text-lg">
              /
            </BreadcrumbSeparator>

            <BreadcrumbItem>
              <BreadcrumbPage className="text-xl font-medium">
                {activeSubBreedName}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        ) : (
          <BreadcrumbItem>
            <BreadcrumbPage className="text-xl font-medium">
              {activeBreedName}
            </BreadcrumbPage>
          </BreadcrumbItem>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
