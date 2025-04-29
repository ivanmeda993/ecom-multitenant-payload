import { Checkbox } from "@/components/ui/checkbox";
import { DEFAULT_PAGE_LIMIT } from "@/constants";
import { useTRPC } from "@/trpc/client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { LoaderIcon } from "lucide-react";

type TagsFilterProps = {
  tags?: string[] | null;
  onChange: (tag: string[]) => void;
};

export const TagsFilter = ({ tags, onChange }: TagsFilterProps) => {
  const trpc = useTRPC();
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      trpc.tags.getMany.infiniteQueryOptions(
        {
          limit: DEFAULT_PAGE_LIMIT,
        },
        {
          getNextPageParam: (lastPage) =>
            lastPage.docs.length > 0 ? lastPage.nextPage : undefined,
        }
      )
    );

  const onTagClick = (tag: string) => {
    if (tags?.includes(tag)) {
      onChange(tags?.filter((t) => t !== tag) || []);
    } else {
      onChange([...(tags ?? []), tag]);
    }
  };
  return (
    <div className="flex flex-col gap-y-2">
      {isLoading ? (
        <div className="flex items-center justify-center p-4">
          <LoaderIcon className="size-4 animate-spin" />
        </div>
      ) : (
        data?.pages.map((page) =>
          page.docs.map((tag) => (
            <div
              key={tag.id}
              className="flex items-center justify-between "
              aria-label={`tag-${tag.name}`}
            >
              <p>{tag.name}</p>
              <Checkbox
                checked={tags?.includes(tag.name)}
                onCheckedChange={() => onTagClick(tag.name)}
                className="cursor-pointer"
              />
            </div>
          ))
        )
      )}
      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className="underline font-medium justify-start text-start disabled:opacity-50 disabled:cursor-not-allowed"
          type="button"
        >
          Load more
        </button>
      )}
    </div>
  );
};
