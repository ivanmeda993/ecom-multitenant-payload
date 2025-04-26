import { SignUpView } from "@/modules/auth/ui/views/sign-up-view";
import { trprcCaller } from "@/trpc/server";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

const SignUpPage = async () => {
  const session = await trprcCaller.auth.session();

  if (session.user) {
    redirect("/");
  }

  return <SignUpView />;
};

export default SignUpPage;
