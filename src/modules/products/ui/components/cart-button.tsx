import { Button } from "@/components/ui/button";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { cn } from "@/lib/utils";
import { useCart } from "@/modules/checkout/hooks/use-cart";
import Link from "next/link";

interface CartButtonProps {
  tenantSlug: string;
  productId: string;
  isPurchased?: boolean;
}

export const CartButton = ({
  tenantSlug,
  productId,
  isPurchased,
}: CartButtonProps) => {
  const isMounted = useIsMounted();
  const cart = useCart(tenantSlug);

  if (!isMounted) return null;

  if (isPurchased) {
    return (
      <Button asChild className="flex-1 font-medium bg-white h-12">
        <Link prefetch href={`/library/${productId}`}>
          View in Library
        </Link>
      </Button>
    );
  }

  return (
    <Button
      className={cn("flex-1 h-12 ")}
      variant={cart.isProductInCart(productId) ? "outline" : "default"}
      onClick={() => cart.toggleProduct(productId)}
    >
      {cart.isProductInCart(productId) ? "Remove form cart" : "Add to cart"}
    </Button>
  );
};
