import { Button } from "@/components/ui/button";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { generateTenantsURL } from "@/lib/get-url";
import { cn } from "@/lib/utils";
import { useCart } from "@/modules/checkout/hooks/use-cart";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

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
  const isMounted = useIsMounted();
  const { totalItems } = useCart(tenantSlug);

  if ((hideIfEmpty && totalItems === 0) || !isMounted) return null;
  return (
    <Button asChild className={cn(" h-12", className)}>
      <Link href={`${generateTenantsURL(tenantSlug)}/checkout`}>
        <ShoppingCartIcon /> {totalItems > 0 ? totalItems : ""}
      </Link>
    </Button>
  );
};
