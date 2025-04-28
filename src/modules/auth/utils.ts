import "server-only"; // <-- ensure this file cannot be imported from the client
import { AUTH_COOKIE } from "@/constants";
import { cookies as getCookies } from "next/headers";

export const generateAuthCookie = async (value: string) => {
  const cookies = await getCookies();
  cookies.set({
    name: AUTH_COOKIE,
    value,
    httpOnly: true,
    path: "/",
    // TODO: ensure cross-domain cookie sharing works
    // sameSite: "none",
    // domain:''
  });
};

export const deleteAuthCookie = async () => {
  const cookies = await getCookies();
  cookies.delete(AUTH_COOKIE);
};
