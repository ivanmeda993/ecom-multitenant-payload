import { MAX_RATING, MIN_RATING } from "@/constants";
import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";

interface StarRatingProps {
  rating: number;
  className?: string;
  iconClassName?: string;
  text?: string;
}
export const StarRating = ({
  rating,
  text,
  iconClassName,
  className,
}: StarRatingProps) => {
  const safeRating = Math.max(MIN_RATING, Math.min(rating, MAX_RATING));
  return (
    <div className={cn("flex items-center gap-x-1", className)}>
      {Array.from({ length: MAX_RATING }).map((_, i) => (
        <StarIcon
          key={i}
          className={cn(
            "size-4",
            i < safeRating ? "fill-black" : "",
            iconClassName
          )}
        />
      ))}
      {text && (
        <p className="text-sm font-medium text-muted-foreground">{text}</p>
      )}
    </div>
  );
};
