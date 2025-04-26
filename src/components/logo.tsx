import { cn } from "@/lib/utils";
import Link from "next/link";

import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface LogoProps {
  className?: string;
}
export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/" className={cn("flex items-center", className)}>
      <span className={cn("text-lg", poppins.className)}>funroad</span>
    </Link>
  );
};
