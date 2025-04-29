import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/modules/checkout/store/use-cart-store";
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
  const cart = useCartStore((state) => state.tenantCarts[tenantSlug]);
  const addProduct = useCartStore((state) => state.addProduct);
  const removeProduct = useCartStore((state) => state.removeProduct);

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
      variant={cart?.productIds.includes(productId) ? "outline" : "default"}
      onClick={() => {
        if (cart?.productIds.includes(productId)) {
          removeProduct(tenantSlug, productId);
        } else {
          addProduct(tenantSlug, productId);
        }
      }}
    >
      {cart?.productIds.includes(productId)
        ? "Remove from cart"
        : "Add to cart"}
    </Button>
  );
};
