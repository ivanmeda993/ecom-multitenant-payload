import { Button } from "@/components/ui/button";
import { useCartHydration } from "@/hooks/use-cart-hydration";
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
  const hasHydrated = useCartHydration();
  const cart = useCart(tenantSlug);

  if (!hasHydrated) {
    // Optionally, return a placeholder or skeleton button while hydrating
    return <Button className={cn("flex-1 h-12")} disabled />;
  }

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
