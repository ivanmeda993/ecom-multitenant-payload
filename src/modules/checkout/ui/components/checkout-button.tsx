import { Button } from "@/components/ui/button";
import { generateTenantsURL } from "@/lib/get-url";
import { cn } from "@/lib/utils";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "../../store/use-cart-store";

interface CheckoutButtonProps {
  className?: string;
  hideIfEmpty?: boolean;
  tenantSlug: string;
}

export const CheckoutButton = ({
  className,
  hideIfEmpty,
  tenantSlug,
}: CheckoutButtonProps) => {
  const totalItems = useCartStore(
    (state) => state.tenantCarts[tenantSlug]?.productIds.length || 0
  );

  if (hideIfEmpty && totalItems === 0) return null;
  return (
    <Button asChild className={cn(" h-12", className)}>
      <Link href={`${generateTenantsURL(tenantSlug)}/checkout`}>
        <ShoppingCartIcon /> {totalItems > 0 ? totalItems : ""}
      </Link>
    </Button>
  );
};
