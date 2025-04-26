import Image from "next/image";
import bgImage from "../../../../../public/auth-bg.png";

export const BackgroundImage = () => {
  return (
    <div className="relative h-screen w-full lg:col-span-2 hidden  lg:flex justify-center items-center">
      <Image
        src={bgImage}
        alt="Authentication background"
        className="pointer-events-none object-contain object-center"
        priority
        layout="responsive"
      />
    </div>
  );
};
