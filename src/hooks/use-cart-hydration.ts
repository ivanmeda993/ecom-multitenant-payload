import { useCartStore } from "@/modules/checkout/store/use-cart-store";
import { useEffect, useState } from "react";

/**
 * Custom hook to determine if the Zustand CART store has been hydrated.
 * Useful for preventing server/client mismatch errors with persisted state.
 */
export const useCartHydration = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Note: This is just in case you want to take into account manual rehydration.
    // You can remove the following line if you don't need it.
    const unsubHydrate = useCartStore.persist.onHydrate(() =>
      setHydrated(false)
    );

    const unsubFinishHydration = useCartStore.persist.onFinishHydration(() =>
      setHydrated(true)
    );

    setHydrated(useCartStore.persist.hasHydrated());

    return () => {
      unsubHydrate();
      unsubFinishHydration();
    };
  }, []);

  return hydrated;
};
