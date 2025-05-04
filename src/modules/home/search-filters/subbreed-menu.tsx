import { checkCollection, checkForSubbreeds } from "@/lib/check-category";
import type { BreedsGetManyOutputSingle } from "@/modules/breeds/types";
import Link from "next/link";

interface SubbreedMenuProps {
  breed: BreedsGetManyOutputSingle;
  isOpen: boolean;
}
export const SubbreedMenu = ({ breed, isOpen }: SubbreedMenuProps) => {
  const hasSubBreeds = checkForSubbreeds(breed);

  if (!isOpen || !hasSubBreeds) {
    return null;
  }

  const bgColor = breed.color || "#F5F5F5";
  return (
    <div
      className="absolute z-[100] border-primary shadow-xl drop-shadow-2xl"
      style={{ top: "100%", left: 0 }}
    >
      <div className="h-3 w-52" />
      <div
        className="-translate-x-[2px] -translate-y-[2px] w-52 overflow-hidden rounded-md text-black shadow-xl drop-shadow-xl "
        style={{ backgroundColor: bgColor }}
      >
        <div>
          {breed.breeds?.map((subbreed) => {
            const isBreed = checkCollection(subbreed);
            if (!isBreed) return null;

            return (
              <Link
                key={subbreed.id}
                href={`/${breed.slug}/${subbreed.slug}`}
                className="flex w-full items-center justify-between px-3 py-2 text-left font-medium hover:bg-black hover:text-white "
              >
                {subbreed.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
