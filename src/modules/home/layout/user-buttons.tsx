import { Button } from "@/components/ui/button";
import { trprcCaller } from "@/trpc/server";
import Link from "next/link";

export const UserButtons = async () => {
  const session = await trprcCaller.auth.session();
  return (
    <div className="hidden lg:min-w-[343px] lg:flex items-center justify-end">
      {session?.user ? (
        <Button
          asChild
          variant="secondary"
          className="h-full rounded-none border-t-0 border-r-0 border-b-0 border-l bg-black px-12 text-lg text-white transition-colors hover:bg-violet-500 hover:text-black"
        >
          <Link href="/admin">Dashboard</Link>
        </Button>
      ) : (
        <div className="hidden lg:flex h-full">
          <Button
            asChild
            variant="secondary"
            className="h-full rounded-none border-t-0 border-r-0 border-b-0 border-l bg-white px-12 text-lg transition-colors hover:bg-violet-500"
          >
            <Link prefetch href="/sign-in">
              Log in
            </Link>
          </Button>
          <Button
            asChild
            variant="secondary"
            className="h-full rounded-none border-t-0 border-r-0 border-b-0 border-l bg-black px-12 text-lg text-white transition-colors hover:bg-violet-500 hover:text-black"
          >
            <Link prefetch href="/sign-up">
              Start Selling
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};
