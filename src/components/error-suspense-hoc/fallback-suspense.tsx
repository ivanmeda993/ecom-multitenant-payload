import { Spinner } from "@/components/ui/spiner";

export const FallbackSuspense = () => {
  return (
    <div className=" px-4 flex items-center justify-center mt-16">
      <p>Loading...</p>
      <Spinner />
    </div>
  );
};
